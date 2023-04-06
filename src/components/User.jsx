import { useState } from 'react'
export const User = (user) => {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = (evt) => {
    if (isFollowing) {
      setIsFollowing(false)
      evt.target.classList.remove('following')
    }
    if (!isFollowing) {
      setIsFollowing(true)
      evt.target.classList.add('following')
    }
  }

  return (
    <div className='user-container'>
      <div className='user-info'>
        <img src={user.avatar} alt={user.username} />
        <div className='user-names'>
          <strong className='name'>{user.first_name} {user.last_name}</strong>
          <span className='username'>{user.username}</span>
        </div>
      </div>
      <button onClick={handleClick}>{isFollowing ? 'Siguiendo' : 'Seguir'}</button>
    </div>
  )
}
