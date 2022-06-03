const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img className="errorImg" src="/images/404page.jpeg" alt="Error page not found"/>
                <div>
                Photo by <a href="https://dribbble.com/mintran">Min Tran</a> on <a href="https://dribbble.com/">Dribbble</a>
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
