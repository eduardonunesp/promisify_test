const initHTML5FSAsync = async () => {
  return new Promise((resolve, reject) => {
    BrowserFS.configure(
      {
        fs: 'MountableFileSystem',
        options: {
          '/html5fs': {
            fs: 'HTML5FS', // only works in chrome-based environment for now
            options: {
              size: 2048,
            },
          },
        },
      },
      (err) => {
        if (err) reject(err)
        else resolve(Promise.promisifyAll(BrowserFS.BFSRequire('fs')))
      }
    )
  })
}

const main = async () => {
  const htmlFS = await initHTML5FSAsync()
  console.log('htmlFS', htmlFS)

  await htmlFS.writeFileAsync('/html5fs/text.txt', 'some content')
  const result = await htmlFS.readFileAsync('/html5fs/text.txt')
  console.log('result', result.toString())
  const dir = await htmlFS.readdirAsync('/html5fs')
  console.log('readdir', dir)
}

main().catch(err => console.error(err))