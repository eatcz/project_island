
import { nextTick } from 'vue'

export const useLazyLoad = (element) => {

    nextTick(() => {
        const imageList = [...document.querySelectorAll(element)]
        console.log(document.querySelectorAll('.lazy'))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src
                    observer.unobserve(entry.target)
                }
            })
        }, {
        })

        imageList.forEach(image => {
            observer.observe(image)
        })
    })

}