const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <img className="homeImg" src="/images/waffle.jpg" alt="Waffles"/>
                <div>
                Photo by <a href="https://unsplash.com/@lindsaymoe">Lindsay Moe</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home



