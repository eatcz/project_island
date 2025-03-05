import { ref } from "vue"

export const useTryCatch = () => {

    const res = ref([])
    const status = ref(0)

    const message = ref()

    const loadData = async (initMethod, ...params) => {
        try {
            const { code, data, message: ResMessage } = await initMethod(params)
            if (code >= 200 && code < 300) {
                res.value = data
                status.value = code
                message.value = ResMessage
            }
        } catch (err) {
            res.value = []
            status.value = 0
            console.log(err)
            return
        }
    }

    return {
        loadData,
        res,
        status,
        message
    }
}