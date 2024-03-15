let burg = document.querySelector('#bars')
let close = document.querySelector('.close')
let toTop = document.querySelector('.to-top')
let head = document.getElementsByTagName('header')
let slideLine = document.querySelector('.slide-line')
let navigation = document.querySelector('.navigation')
let slideItem = document.querySelectorAll('.slide-item')
let btn = document.querySelectorAll('.slide-btn button')
let projectSlide = document.querySelector('.project-slide')

let width = projectSlide.offsetWidth



function init() {
	width = projectSlide.offsetWidth
	slideLine.style.width = width * slideItem.length + 'px'
	slideItem.forEach(el => {
		el.style.width = `${width}px`
	})
}

window.addEventListener("resize", init)
init()


btn[0].addEventListener("click", () => {
	btn.forEach(el => {
		el.classList.remove('btn-active')
	})
	btn[0].classList.add('btn-active')
	slideLine.style.transform = "translateX(-0px)"
})

btn[1].addEventListener("click", () => {
	btn.forEach(el => {
		el.classList.remove('btn-active')
	})
	btn[1].classList.add('btn-active')
	slideLine.style.transform = "translateX(-"+width+"px)"
})

btn[2].addEventListener("click", () => {
	btn.forEach(el => {
		el.classList.remove('btn-active')
	})
	btn[2].classList.add('btn-active')
	slideLine.style.transform = "translateX(-"+(width * 2)+"px)"
})

window.addEventListener("scroll", () => {
	if(scrollY >= 130) {
		toTop.classList.add('top-act')
	} else {
		toTop.classList.remove('top-act')
	}
})

burg.addEventListener("click", () => {
	navigation.style.display = "flex"
})

close.addEventListener("click", () => {
	navigation.style.display = "none"
})