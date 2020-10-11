export interface IBookmark {
  id: string,
  publishedAt: string,
  title: string,
  imgSrc: string
}

export type navItem = {
  title: string,
  linkTo: string
}

export type Item = {
  id: {
    videoId: string
  },
  snippet: {
    publishedAt: string,
    title: string,
    thumbnails: {
      default: {
        url: string
      }
    }
  },
}
