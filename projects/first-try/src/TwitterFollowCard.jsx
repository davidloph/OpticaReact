import { useState } from "react"

//Este sería el hijo
export function TwitterFollowCard ({children, userName = 'Unknown', name, avatar, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {setIsFollowing(!isFollowing)}
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de la mejor" src={avatar} />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}