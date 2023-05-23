import Image from 'next/image'

function ProfileIcon () {
    return (
        <Image
        src='/profileUser.png'
        alt='ProfileUser'
        width={190}
        height={190}
        />
    )
}

export default ProfileIcon