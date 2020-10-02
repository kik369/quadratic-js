const form = document.querySelector('form')
const output = document.querySelector('.output')
const spans = document.querySelectorAll('span')
const dOut = document.querySelector('.d')
const solutions = document.querySelector('.solutions')
const x1Out = document.querySelector('.x1')
const x2Out = document.querySelector('.x2')

let x1 = 0
let x2 = 0
let absDiscriminant = 0
let imaginary = 0
let real = 0

const discriminantCalc = (a, b, c) => b ** 2 - 4 * a * c

const dGreaterThanZero = (x1, x2) => {
    solutions.innerText = 'Two real solutions'
    x1Out.innerHTML = `x<sub>1</sub> = ${x1}`
    x2Out.innerHTML = `x<sub>2</sub> = ${x2}`
}

const dEqualToZero = x1 => {
    solutions.innerText = 'One real solution'
    x1Out.innerHTML = `x = ${x1}`
    x2Out.innerHTML = ``
}

const dLessThanZero = (real, imaginary) => {
    solutions.innerText = 'Two complex solutions'
    x1Out.innerHTML = `x<sub>1</sub> = ${real} + ${imaginary}i`
    x2Out.innerHTML = `x<sub>2</sub> = ${real} - ${imaginary}i`
}

const roots = (a, b, c) => {

    discriminant = discriminantCalc(a, b, c)
    dOut.innerText = discriminant

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        dGreaterThanZero(Math.round(x1 * 100) / 100, Math.round(x2 * 100) / 100)
    } else if (discriminant === 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        dEqualToZero(Math.round(x1 * 100) / 100)
    } else {
        absDiscriminant = Math.abs(discriminant)
        imaginary = Math.sqrt(absDiscriminant) / (2 * a)
        real = -b / (2 * a)
        dLessThanZero(Math.round(real * 100) / 100, Math.round(imaginary * 100) / 100)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const a = form.a.value
    const b = form.b.value
    const c = form.c.value

    spans[0].innerText = a
    spans[1].innerText = b
    spans[2].innerText = c

    roots(a, b, c)

    output.style.display = 'block'
})
