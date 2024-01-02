const id = ref(0)

export function useId() {
  const nextId = () => {
    id.value += 1
    return id.value
  }
  return {
    id,
    nextId,
  }
}
