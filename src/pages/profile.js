import Navbar from '@/components/Navbar'
import ProfileIcon from '@/components/profileUser/ProfileIcon'
import { ProfileUser } from '@/components/profileUser/ProfileUser'




export default function Profile() {
    return (
        <div>
            <main className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
                <Navbar />
                <div className='grid place-items-center'>

                    <section className='bg-light-form bg-opacity-25 h-[96%] w-[96%] mt-5 md:max-h-screen'>
                    
                        <section className='grid grid-cols-3'>
                            <div className='p-4 w-full'>
                                <div>
                                <section>
                            <ProfileUser/>
                        </section>
                                </div>

                            </div>
                            <div className=' flex col-span-2 p-20 py-6 justify-end'>
                                <ProfileIcon />
                            </div>
                        </section>
                        
                    </section>
                </div>
            </main>
        </div>
    )
}
