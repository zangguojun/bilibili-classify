declare interface IUser {
  isLogin: boolean
  name: string
  face: string
  is_senior_member?: number
  follow_count?: number
  school?: {
    name: string
  }
  birthday?: string
  mid?: number
  live_room?: {
    title: string
    roomStatus: number
    liveStatus: number
    roundStatus: number
    url: string
  }
  fans_badge?: boolean
  is_followed?: boolean
  official?: {
    title?: string
  }
  vip?: {
    vipType: number
    type: number
    nickname_color: string
    label: {
      text: string
    }
  }
  fans_medal?: {
    medal: {
      level: number
      medal_name: string
    }
    show: boolean
    wear: boolean
  }
  nameplate?: {
    name: string
  }
  sex?: string
  mtime?: number
  jointime?: number
  level?: number
  silence?: number
  attribute?: number
  uname?: string
  sign?: string
  official_verify?: {
    desc?: string
    type?: number
  }
}

declare interface ITags {
  count: number
  name: string
  tip: string
  tagid: number
}
