import Navbar from '@/components/Navbar'
import { HistoryComents } from '@/components/profileUser/HistoryComents'
import ProfileIcon from '@/components/profileUser/ProfileIcon'
import { ProfileUser } from '@/components/profileUser/ProfileUser'
import { ValorationCard } from '@/components/profileUser/ValorationCard'




export default function Profile() {
    return (
        <div>
            <main className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
                <Navbar />
                <div className='grid place-items-center'>

                    <section className='bg-light-form bg-opacity-25 h-[96%] w-[96%] mt-5 md:max-h-screen'>
                    
                        <section className='grid grid-cols-3'>
                            <div className='p-4 w-full'>
                                <div className='flex w-screen flex-col gap-4 mt-4'>
                                
                            <ProfileUser/>
                            <div className='flex w-screen flex-col gap-4 mt-4'>
                            <HistoryComents/>
                            {/* <ValorationCard/> */}
                            </div>

                            
                            
                        
                                </div>

                            </div>
                            <div className=' flex w-64 h-64 ml-36 col-span-2 p-20 py-6 justify-center md:60'>
                                <ProfileIcon />
                            </div>
                        </section>
                        
                    </section>
                </div>
            </main>
        </div>
    )
}
