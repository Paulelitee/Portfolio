fetch('/index.tsx')
.then(response => {

    console.log(response.headers.get('Content-Type'))

    console.log(response.headers.get('Date'))
})


console.log('working')
