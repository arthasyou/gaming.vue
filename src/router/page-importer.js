function filePaths () {
  return require.context('pages', false, /\.vue$/)
}

// function pathNames () {
//   return filePaths().keys().map(string => {
//     return converPathToName(string)
//   })
// }

function converPathToName (pathString) {
  return pathString.substring(2).slice(0, -4).toLowerCase()
}

function routes () {
  const paths = filePaths().keys().map(string => {
    return {
      path: converPathToName(string),
      component: () => import('src/pages' + string.substring(1))
    }
  })

  return paths
}



// let names = router();
// console.log('filePath: ', names);

export default {
  getRouters: routes
}