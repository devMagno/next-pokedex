export default function renderId(id: string) {
  if (!id) return ''

  if (id.length === 1) return `00${id}`

  if (id.length === 2) return `0${id}`

  return id
}
