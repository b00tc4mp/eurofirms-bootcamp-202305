//import NetworkRules from '../pages/NetworkRules'

function NetworkRules({ onLoggedOut }) {
    console.log('Meetup network rules ->render')

    return (
        <div className="home-view">

            <main className="py-[3rem]">
                <section className="flex flex-col items-center gap-10 pt-12 pb-10">
                    <article className="w-[87%] bg-[#eeeeee] rounded-xl p-10 py-2">
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Rules of use </p>
                        <p className="mt-4">Dear user,</p>
                        <p className="mt-4">I hope this letter finds you well. By means of the present, I want to clarify in a formal and unequivocal way that I do not assume any responsibility in relation to this website or any activity, content or situation related to it.</p>
                        <p className="mt-4">After careful consideration, I have decided that it is in my best interest and the interest of all parties involved that I completely disassociate myself from any involvement or liability with respect to '<b>Meetup Bikers</b>'. This decision is based on personal and professional factors that have led me to focus my efforts and attention in other areas.</p>
                        <p className="mt-4">Therefore, I want to emphasize that I am not willing to assume or accept any obligation, legal, financial, operational or any other type of responsibility in relation to '<b>Meetup Bikers</b>'. As of the date of this letter, I completely disassociate myself from any connection, contribution or participation in the aforementioned website.</p>
                        <p className="mt-4">This communication is intended to clearly and definitively establish my position on this matter.</p>
                        <p className="mt-4">If you have any questions or concerns about my decision, you can contact me at my email address. However, I want to reiterate that my disclaimer position in relation to '<b>Meetup Bikers</b>' is final and immutable.</p>
                        <p className="mt-4">I appreciate your understanding and respect in this matter. I wish you success in your future endeavors and endeavors.</p>
                        <p className="mt-4">Sincerely,</p>
                        <p className="mt-8">Joan</p>
                    </article>
                </section>
            </main>
        </div>
    )
}
export default NetworkRules