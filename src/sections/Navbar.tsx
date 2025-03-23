import Image from "next/image";
import oslogo from '@/assets/oslogo.png';
import menuBar from '@/assets/menubar.svg'
import Button from "@/components/Button";

const navlinks = [
    {label: 'Home', href: '/'}, 
    {label: 'About', href: '/features'},
    {label: 'Notes', href: '/integrations'},
    {label: 'Career', href: '/career'}, 
    {label: 'FAQs', href: '/faqs'},

]

export default function Navbar(){
    return (
        <section className="py-4 lg:py-8">
        <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-2  lg:grid-cols-3 border border-white/15  shadow-blue-900 rounded-2xl p-2  px-4 md:pr-2 items-center">
                <div>
                    <Image src={oslogo} alt="os-logo" />
                </div>
                <div className="lg:flex justify-center items-center hidden">
                    <nav className="flex gap-8 justify-center">
                        {navlinks.map((link, index) => (
                           <a href={link.href} key={link.label}>{link.label}</a>
                        ))}
                    </nav>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <Image src={menuBar} alt="menubar" className="w-6 h-6 md:hidden"/>
                        <Button variant="primary" className="hidden md:inline-flex items-center">Partner with us</Button>
                        <Button variant="secondary" className="hidden md:inline-flex items-center">Join</Button>
                    </div>

            </div>
            </div>
        </section>
    )
}