import Image from 'next/image'

function ProfileIcon () {
    return (
        <Image
        src='/profileUser.png'
        alt='ProfileUser'
        width={100}
        height={50}
        />
    )
}

export default ProfileIcon