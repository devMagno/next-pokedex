export interface SimpleAttribute {
  name: string
  url: string
}

interface Ability {
  slot: number
  is_hidden: boolean
  ability: SimpleAttribute
}

interface VersionGroupDetail {
  level_learned_at: number
  version_group: SimpleAttribute
  move_learn_method: SimpleAttribute
}

interface Move {
  move: SimpleAttribute
  version_group_details: VersionGroupDetail[]
}

interface Sprites {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

interface Stat {
  base_stat: number
  effort: number
  stat: SimpleAttribute
}

interface Type {
  slot: number
  type: SimpleAttribute
}

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  forms: SimpleAttribute[]
  moves: Move[]
  sprites: Sprites
  stats: Stat[]
  types: Type[]
}

export interface GetPokemonListResponse {
  count: number
  results: SimpleAttribute[]
  next?: string
  previous?: string
}
