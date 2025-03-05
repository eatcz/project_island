
import { nextTick } from 'vue'
// lazyload hook

export const useLazyLoad = (element) => {


    nextTick(() => {
        const imageList = [...document.querySelectorAll(element)]
        console.log(document.querySelectorAll('.lazy'))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src
                    // 图片加载后即停止监听该元素
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