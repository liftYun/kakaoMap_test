import { ref, watch } from 'vue'

export default function useDebounce(source, delay = 200) {
  const debounced = ref(source.value)
  let timer = null

  watch(source, (val) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      debounced.value = val
    }, delay)
  })

  return debounced
}
