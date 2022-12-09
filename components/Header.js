import {
    HomeIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    BadgeCheckIcon,
} from '@heroicons/react/outline'
import { Router, useRouter } from 'next/router'
import HeaderItem from './HeaderItem'

const Header = () => {
    const router = useRouter()
    return (
        <div className="flex  flex-grow items-center my-auto justify-evenly max-w-2xl">
            <HeaderItem title='HOME' Icon={HomeIcon} onClick={() => router.push('/')} />
            {/* <HeaderItem title='COLLECTION' Icon={CollectionIcon} /> */}
            {/* <HeaderItem title='TRENDING' Icon={LightningBoltIcon} /> */}
            {/* <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} /> */}
            < HeaderItem title='SEARCH' Icon={SearchIcon} />
            <h1>LOGO</h1>
            <HeaderItem title='ACCOUNT' Icon={UserIcon} onClick={() => router.push('/auth/signin')} />

        </div>
    )
}

export default Header