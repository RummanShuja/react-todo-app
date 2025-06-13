export default function Nav() {
    return (
        <>
            <nav className="navbar flex justify-center bg-purple-800 h-10 items-center text-white">
                <div className="flex justify-between w-full lg:w-[60%] p-2">
                    <div className="logo font-bold text-lg">iTask</div>
                    <div className="flex gap-6">
                        <div>Home</div>
                        <div>Your Tasks</div>
                    </div>
                </div>
            </nav>
        </>
    )
}