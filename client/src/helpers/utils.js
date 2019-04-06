import { PLACEHOLDER_URL, HEX_LETTERS } from '<constants>/constants'

export const getUsers = (users) => {
  let newUsers = []

  users.map(({ id, username, name }) => newUsers.push({ id, name, username }))

  return newUsers
}

export const generateRandomUrls = () => {
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += HEX_LETTERS[Math.floor(Math.random() * 16)]
  }

  const resultantColor = `${PLACEHOLDER_URL}/${color}`
  return resultantColor
}

export const generateAlbumData = (albums = [], users = []) => {
  let username = ''
  const data = []

  albums.map(({ id, userId, title }) => {
    return users.forEach(user => {
      if (user.id === userId) {
        data.push({ id, title, imageUrl: generateRandomUrls() })
        username = user.username
      }
    })
  })

  return {
    data,
    username
  }
}

export const generatePhotosData = (photos = [], id = '') => photos.filter(photo => photo.albumId === Number(id))
