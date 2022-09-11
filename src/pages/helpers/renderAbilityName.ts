export default function renderAbilityName(name: string) {
  const sanitized = name.replace(/-/g, ' ')

  const arr = sanitized.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join(' ')
}
