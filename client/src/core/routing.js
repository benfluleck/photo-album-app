import AlbumPage from '<pages>/AlbumPage'
import PhotoPage from '<pages>/PhotoPage'

const routes = {
  default: [
    {
      exact: true,
      path: '/',
      component: AlbumPage
    },
    {
      path: '/:albumId/photos',
      component: PhotoPage
    }
  ]
}
export default routes
