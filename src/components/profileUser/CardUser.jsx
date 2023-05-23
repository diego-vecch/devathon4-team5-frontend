export const CardUser = () => {
    return (


        <div className="w-96  border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex flex-col mx-4 my-8 items-start  pb-10 ml-2">
                <div className="grid grid-cols-2 w-full">
                <span className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Name user:</span>
                <p className="border-1 "> Loren</p>
                </div>
                <div className="grid grid-cols-2 w-full">
                <span className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Email:</span>
                <p className="border-1 "> Loren@</p>
                </div>
                
                <form>
                    <div className="grid grid-cols-2 w-full">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Change password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="•••••••••" required />
                        <div className="grid grid-cols-2 w-full gap-6 mt-6">
                            <button type="submit" className="bg-light-btn m-2 w-24 text-light-bg1 rounded">Save</button>
                            <button type="submit" className="bg-light-btn m-2 w-24 text-light-bg1 rounded">Cancel</button>
                        </div>

                    </div>

                </form>

                <div className="flex flex-row">

                </div>

            </div>


        </div>


    )
}


