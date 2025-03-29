import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
function App() {
//  const title = "Welcome to the new Blog"
//  const like = 50
//  const google = "http://www.google.com"
// <h1>App Component</h1>
// <h1>{title}</h1>
// <p>Liked {like * 2} times</p>
// <p>{Math.random()}</p>
// <a href={google} target="_blank" rel="noopener noreferrer">Google</a>

  return (
    <div>
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blog/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
