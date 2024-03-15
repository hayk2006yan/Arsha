let a = document.querySelectorAll('.a')
let burg = document.querySelector('#bars')
let push = document.querySelector('.push')
let col2 = document.querySelector('.col2')
let col3 = document.querySelector('.col3')
let col1 = document.querySelector('.col1')
let App2 = document.querySelector('.App2')
let app = document.querySelectorAll('.app')
let btn = document.querySelectorAll('.btn')
let x = document.querySelectorAll('.click')
let col = document.querySelectorAll('.col')
let card1 = document.querySelector('.Card1')
let card2 = document.querySelector('.Card2')
let video = document.querySelector('.video')
let card3 = document.querySelector('.Card3')
let close = document.querySelector('.close')
let plan = document.querySelectorAll('.plan')
let toTop = document.querySelector('.to-top')
let line = document.querySelectorAll('.line')
let plus = document.querySelectorAll('.plus')
let slider = document.querySelector('.slider')
let close2 = document.querySelector('.close2')
let middle = document.querySelector('.middle')
let contact = document.querySelector('.contact')
let pricing = document.querySelector('.pricing')
let head = document.getElementsByTagName('header')
let skillsImage = document.querySelector('.image')
let details = document.querySelectorAll('.detail')
let teamMain = document.querySelector('.team-main')
let sec2 = document.querySelector('.section2-main')
let sec3Main = document.querySelector('.sec3-main')
let pricePlan = document.querySelector('.price-plan')
let teamLine1 = document.querySelector('.team-line1')
let teamLine2 = document.querySelector('.team-line2')
let closeSpan = document.querySelector('.close-span')
let section2Top = document.querySelector('.section2')
let sec3Image = document.querySelector('.sec3-image')
let navigation = document.querySelector('.navigation')
let mainItem = document.querySelectorAll('.main-item')
let sec2Logo = document.querySelector('.section2-logo')
let skillsInfo = document.querySelector('.skills-info')
let actionMain = document.querySelector('.action-main')
let section1 = document.querySelector('.section1-main')
let sliderMain = document.querySelector('.slider-main')
let sliderLine = document.querySelector('.slider-line')
let slideItem = document.querySelectorAll('.slide-item')
let secVideo = document.querySelector('.video-section1')
let section3Info = document.querySelector('.section3-info')
let servicesMain = document.querySelector('.services-main')
let quesClick = document.querySelectorAll('.question-click')
let portfolioCont = document.querySelector('.portfolio-cont')
let questionsMain = document.querySelector('.questions-main')
let questionItem = document.querySelectorAll('.question-item')
let questionsTitle = document.querySelector('.questions-title')
let portfolioTitle = document.querySelector('.portfolio-title')

quesClick.forEach((element, index) => {
  element.addEventListener("click", () => {
    let toDown = document.querySelectorAll('.question-to-down')[index]
    toDown.classList.toggle("ques-active")
    let down2 = document.querySelectorAll('.down-ques')[index]
	let up = document.querySelectorAll('.up-ques')[index]
    down2.classList.toggle('svg-act')
    up.classList.toggle('svg-act')
  })
})

let count = 0, width

function init() {
	width = sliderMain.offsetWidth
	sliderLine.style.width = width * slideItem.length + 'px'
	slideItem.forEach(el => {
		el.style.width = `${width}px`
	})
}

document.getElementById('right').addEventListener("click", () => {
	if(count < slideItem.length - 1) {
		count++
		sliderLine.style.transform = `translate(-${count*width}px)`
	} else {
		count = 0
		sliderLine.style.transform = `translate(-${count*width}px)`
	}
})

document.querySelector('.left').addEventListener("click", () => {
	if(count > 0) {
		count--
		sliderLine.style.transform = `translate(-${count*width}px)`
	} else {
		count = slideItem.length - 1
		sliderLine.style.transform = `translate(-${count*width}px)`
	}
})

window.addEventListener("resize", init)
init()

plus.forEach(el => {
	el.addEventListener("click", () => {
		slider.classList.add('slider-act')
	})
})

closeSpan.addEventListener("click", () => {
	slider.classList.remove('slider-act')
})

btn[1].addEventListener("click", () => {
	btn.forEach(el => {
		if(el.classList.contains('btn-active')) 
			el.classList.remove('btn-active')
	})
	btn[1].classList.add('btn-active')
	details.forEach(el => {
		col.forEach(el => {
			if(el.classList.contains("col1") && window.innerWidth > 992) {
				el.style.marginBottom = "100px"
			} else if(el.classList.contains("col1") && window.innerWidth > 768){
				el.style.marginBottom = "100px"
			} else {
				el.style.marginBottom = "0px"
			}
		})
		if(el.classList.contains('app')) {
			col1.classList.remove('col-close')
			col1.classList.add('col-act')
			el.classList.add('app1')
			col1.style.marginBottom = "30px"
			if(el.classList.contains('App3')) {
				el.classList.add('app3')
			}
			if(el.classList.contains('app2')) {
				el.classList.add('app2-act')
			}
		}
		col2.classList.add('col-close')
		col2.classList.remove('col-act')
		col3.classList.add('col-close')
		col3.classList.remove('col-act')
	})
})

btn[2].addEventListener("click", () => {
	btn.forEach(el => {
		if(el.classList.contains('btn-active')) 
			el.classList.remove('btn-active')
	})
	btn[2].classList.add('btn-active')
	col.forEach(el => {
			if(el.classList.contains("col3") && window.innerWidth > 992) {
				el.style.marginBottom = "200px"
			} else if (el.classList.contains("col3") && window.innerWidth > 768){
				el.style.marginBottom = "0"
			}
		})
	details.forEach(el => {
		if(el.classList.contains('card')) {
			col3.classList.add('col-act')
			col3.classList.remove('col-close')
			if(el.classList.contains('card1')) {
				el.classList.remove('card1')
				el.classList.add('Card1')
			} else if(el.classList.contains('card2')) {
				el.classList.add('Card2')
			} else {
				el.classList.add('Card3')
			}
		}
		App2.classList.remove('App2')
		App2.classList.add('App2-close')
		col1.classList.add('col-close')
		col1.classList.remove('col-act')
		col2.classList.add('col-close')
		col2.classList.remove('col-act')
	})
})

btn[3].addEventListener("click", () => {
	btn.forEach(el => {
		if(el.classList.contains('btn-active')) 
			el.classList.remove('btn-active')
	})
	btn[3].classList.add('btn-active')
	details.forEach(el => {
		if(el.classList.contains('web')) {
			col2.classList.remove('col-close')
			col2.classList.add('col-act')
		} else {
			col1.classList.add('col-close')
			col1.classList.remove('col-act')
			col3.classList.add('col-close')
			col3.classList.remove('col-act')
		}
	})
})

btn[0].addEventListener("click", () => {
	btn.forEach(el => {
		if(el.classList.contains('btn-active')) 
			el.classList.remove('btn-active')
	})
	btn[0].classList.add('btn-active')
	col.forEach(el => {
		if(el.classList.contains('col3')) {
			el.style.height = "auto"
		}
		el.classList.remove('col-close')
		el.classList.remove('col-act')
	})
	details.forEach(el => {
		if(el.classList.contains('app2')) {
			el.classList.remove('app2-act')
		}
		App2.classList.remove('App2-close')
		App2.classList.add('App2')
		if(el.classList.contains('app')) {
			if(el.classList.contains('App3')) {
				el.classList.remove('app3')
			}
			el.classList.remove('app1')
			if(el.classList.contains('app2')) {
				el.classList.remove('app2-act')
			}
		}
		if(el.classList.contains('card')) {
			col3.style.height = "400px"
			if(el.classList.contains('Card1')) {
				el.classList.remove('Card1')
				el.classList.add('card1')
			} else if(el.classList.contains('card2')) {
				el.classList.remove('Card2')
			} else {
				el.classList.remove('Card3')
			}
			col3.style.marginBottom = "0"
		}
	})
})

x.forEach((element, index) => {
  element.addEventListener("click", () => {
    let toDown = document.querySelectorAll('.to-down')[index]
    toDown.classList.toggle("about-active")
    let down2 = document.querySelectorAll('.down2')[index]
	let up = document.querySelectorAll('.up')[index]
    down2.classList.toggle('svg-act')
    up.classList.toggle('svg-act')
  })
})

video.addEventListener("click", () => {
	secVideo.style.display = "flex"
})

close2.addEventListener("click", () => {
	secVideo.style.display = "none"
})


window.addEventListener("scroll", () => {
	if(scrollY >= head[0].offsetHeight) {
		head[0].classList.add('bg-color')
		sec2Logo.classList.add('icons-act')
		sec2.classList.add('sec2-act')
		toTop.classList.add('top-act')
	} else {
		head[0].classList.remove('bg-color')
		toTop.classList.remove('top-act')
	}
	if(scrollY >= section1.offsetTop && scrollY <= section1.offsetHeight / 2) {
		a[0].classList.add('a-act')
		a[1].classList.remove('a-act')
	} else {
		a[0].classList.remove('a-act')
		a[1].classList.add('a-act')
	}
	if(scrollY >= sec3Main.offsetTop) {
		a[1].classList.remove('a-act')
	}
	if(scrollY >= servicesMain.offsetTop - servicesMain.offsetHeight / 2) {
		a[2].classList.add('a-act')
	} 
	if(scrollY >= actionMain.offsetTop || scrollY <= servicesMain.offsetTop - servicesMain.offsetHeight / 2) {
		a[2].classList.remove('a-act')
	}
	if(scrollY >= actionMain.offsetTop + actionMain.offsetHeight) {
		a[3].classList.add('a-act')
		a[4].classList.remove('a-act')
	}
	if(scrollY <= actionMain.offsetTop + actionMain.offsetHeight) {
		a[3].classList.remove('a-act')
	}
	if(scrollY >= sec2.offsetTop + sec2.offsetHeight - 200) {
		section3Info.classList.add('section3-info-act')
		sec3Image.classList.add('section3-info-act')
	}
	if(scrollY >= section3Info.offsetTop + section3Info.offsetHeight - 200) {
		skillsInfo.classList.add('skills-act')
		skillsImage.classList.add('skills-image-act')
		setTimeout(() => {
			line[0].style.width = "100%"
			line[1].style.width = "90%"
			line[2].style.width = "75%"
			line[3].style.width = "55%"
		}, 400)
	}
	if(scrollY >= skillsInfo.offsetTop + skillsInfo.offsetHeight - 200) {
		servicesMain.classList.add('serv-act')
		mainItem.forEach((el, index) => {
			setTimeout(() => {
				el.classList.add('serv-act')
			}, 600)
		})
	}
	if(scrollY >= servicesMain.offsetTop + servicesMain.offsetHeight - 200) {
		actionMain.classList.add('action-act')
	}
	if(scrollY >= actionMain.offsetTop + actionMain.offsetHeight - 150) {
		portfolioTitle.classList.add('port-title-act')
		setTimeout(() => {
			portfolioCont.classList.add('port-cont-act')
		}, 400)
	}
	if(scrollY >= portfolioCont.offsetTop + portfolioCont.offsetHeight - 300) {
		a[3].classList.remove('a-act')
		a[4].classList.add('a-act')
		teamMain.classList.add('team-main-act')
	}
	if(scrollY >= portfolioCont.offsetTop + portfolioCont.offsetHeight) {
		teamLine1.classList.add('team-line-act')
	}
	if(scrollY >= portfolioCont.offsetTop + portfolioCont.offsetHeight + 100) {
		teamLine2.classList.add('team-line-act')
	}
	if(scrollY >= teamMain.offsetTop + teamMain.offsetHeight - 200) {
		a[4].classList.remove('a-act')
		pricing.classList.add('pricing-act')
	}
	if(scrollY >= teamMain.offsetTop + teamMain.offsetHeight) {
		plan.forEach(el => el.classList.add('plan-act'))
		middle.classList.add('plan-act')
	}
	if(scrollY >= plan[0].offsetTop + plan[0].offsetHeight + teamMain.offsetTop + teamMain.offsetHeight) {
		questionsTitle.classList.add('questions-title-act')
	}
	if(scrollY >= plan[0].offsetTop + plan[0].offsetHeight + teamMain.offsetTop + teamMain.offsetHeight + 50) {
		questionItem[0].classList.add('question-item-act')
		questionItem[1].classList.add('question-item-act')
	}
	if(scrollY >= plan[0].offsetTop + plan[0].offsetHeight + teamMain.offsetTop + teamMain.offsetHeight + 150) {
		questionItem[2].classList.add('question-item-act')
		questionItem[3].classList.add('question-item-act')
	}
	if(scrollY >= plan[0].offsetTop + plan[0].offsetHeight + teamMain.offsetTop + teamMain.offsetHeight + 240) {
		questionItem[4].classList.add('question-item-act')
	}
	if(scrollY >= questionsMain.offsetTop + questionsMain.offsetHeight - 200) {
		contact.classList.add('contact-act')
		a[5].classList.add('a-act')
	} else {
		a[5].classList.remove('a-act')
	}
})

burg.addEventListener("click", () => {
	navigation.style.display = "flex"
})

close.addEventListener("click", () => {
	navigation.style.display = "none"
})