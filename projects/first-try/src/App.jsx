import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

//Este sería el padre
const users = [
    {
        userName: 'ValeVz',
        name: 'ValeVZ',
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7319245544625766405~c5_100x100.jpeg?lk3s=a5d48078&nonce=2692&refresh_token=6b97b08039107f947987ca01469a39c8&x-expires=1734112800&x-signature=zzx1wbl4%2FFK6rgz3vL6RxxetaM8%3D&shp=a5d48078&shcp=b59d6b55",
        isFollowing: true
    },
    {
        userName: 'dav_loperah',
        name: 'David_loperah',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a921128f07607b40e4a0ffd84a2f1d00~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=44125&refresh_token=075f69c647195e781ca1161612de8aa8&x-expires=1734112800&x-signature=DRYVhJmKsMbSjMr8YCnWcIpLTd4%3D&shp=a5d48078&shcp=81f88b70',
        isFollowing: true
    },
    {
        userName: 'Seishiro_Nagi',
        name: 'xXNagiXx',
        avatar: 'https://preview.redd.it/n2t2af3ptova1.png?auto=webp&s=ccb8503ae96172a3184f41208ba73225674ad446',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {users.map(user => {
                const {userName, name, avatar, isFollowing} = user
                return (
                    <TwitterFollowCard key={userName} initialIsFollowing={isFollowing} avatar={avatar} >
                        <strong>{name}</strong>
                    </TwitterFollowCard>
                )
            })}
        </section>
    )
}