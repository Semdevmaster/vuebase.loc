export default function (to, from, next) {
  const currentUser = 1
  if (!currentUser) {
    next({ name: 'login', query: { message: 'login' } })
  }
  next()
}
