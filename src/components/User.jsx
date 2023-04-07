import { useState } from 'react'
export const User = (user) => {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = () => setIsFollowing(!isFollowing)
  const changeClass = isFollowing ? 'following' : ''
  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

  return (
    <div className='user-container'>
      <div className='user-info'>
        <img src={user.avatar} alt={user.username} />
        <div className='user-names'>
          <strong className='name'>
            {user.first_name} {user.last_name}
          </strong>
          <span className='username'>
            {user.username}
          </span>
        </div>
      </div>
      <button className={changeClass} onClick={handleClick}>
        <span className='button-text'>{buttonText}</span>
        <span className='nofollowing'>Dejar de seguir</span>
      </button>
    </div>
  )
}
