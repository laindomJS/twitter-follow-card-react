import './App.css'
import { data } from './data'
import { User } from './components/User'

function App () {
  return (
    <article className='article-container'>
      <h2>¿A quien seguir?</h2>
      <section className='users-container'>
        {data.map(user => (
          <User key={user.id} {...user} />
        ))}
      </section>
    </article>
  )
}

export default App
