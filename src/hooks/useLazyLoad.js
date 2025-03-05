
import { onMounted } from 'vue'
// lazyload hook

export const useLazyLoad = (element) => {

    const imageList = document.querySelectorAll(element)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src
                // 图片加载后即停止监听该元素
                observer.unobserve(entry.target)
            }
        })
    }, {
        root: document.querySelector('#app')
    })

    onMounted(() => {
        const lazyImages = document.querySelectorAll('.lazy')
        lazyImages.forEach(image => {
            observer.observe(image)
        })
    })
}