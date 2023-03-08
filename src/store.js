import {reactive} from "vue";

const store = reactive({
    movies: [],
    tv: [],
    search: '',
    apiKey: ''
})

export default store