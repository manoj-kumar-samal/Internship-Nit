

export default function Footer(){
    return(
        <div className="hidden md:max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex justify-between mt-20 text-sm mb-5">
            <div>
                <img src="title.PNG" width="130px"></img>
                <div className="mt-8 font-semibold">
                    <span>Connect with us</span>
                </div>
            </div>
            <div>
                <div>About us</div>
                <div className="my-2">Careers</div>
                <div>Employer home</div>
                <div className="my-2">Sitemap</div>
                <div>Credits</div>
            </div>
            <div>
                <div>Help center</div>
                <div className="my-2">Summons/Notices</div>
                <div>Grievances</div>
                <div className="mt-2">Report issue</div>
            </div>
            <div>
                <div>Privacy policy</div>
                <div className="my-2">Terms & conditions</div>
                <div>Fraud alert</div>
                <div className="mt-2">Trust & safety</div>
            </div>
            <div>
                <img src="playstore.PNG" width="300px" className="border border-gray-400"></img>
            </div>
        </div>
    )
}