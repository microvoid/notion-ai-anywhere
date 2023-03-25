export interface INotionSpace {
  id: string
  name: string
  icon: string
}

export interface IPostNotionProgress {
  done: boolean
  value: {
    type: string
    completion: string
  }
}
