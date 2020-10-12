export default function(to, from, savedPosition) {
  if (to.hash) {
    console.log('ScrollBehavior and Hash')
    return { selector: to.hash }
  } else {
    console.log('ScrollBehavior')
    return { x: 0, y: 0 }
  }
}
