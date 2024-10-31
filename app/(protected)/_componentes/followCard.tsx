"use client"

export function FollowCard() {

    return (
        <div className="py-8 px-8 max-w-full space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/images/erin-lindford.jpg" alt="profileImage" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        Nombre
                    </p>
                    <p className="text-slate-500 font-medium">
                        @username
                    </p>
                </div>
            </div>
            <div className="ml-auto">
                <button className="px-4 py-1 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">Follow</button>

            </div>
        </div>

    );
}