export default function renderStatName(name: string) {
  const splittedName = name.split('-')

  if (splittedName.length > 1)
    return `${splittedName[0].charAt(0)}${splittedName[1].slice(0, 3)}`

  return name.slice(0, 3)
}
