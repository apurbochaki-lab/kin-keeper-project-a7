import insta from '@/assets/instagram.png';
import facebook from '@/assets/facebook.png';
import twitter from '@/assets/twitter.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] pt-20 text-white">
            <section className='container mx-auto'>
                <div className=' text-center'>
                    <h2 className='text-6xl font-bold mb-3'>KeenKeeper</h2>
                    <p className='text-white/60 p-1'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <div className='mt-5 text-center mb-10'>
                    <h2 className='text-lg font-semibold'>Social Links</h2>
                    <div className='mt-3 flex items-center justify-center gap-4'>
                        <Link href={"https://instagram.com"}><Image src={insta} width={40} height={40} alt='Instagram Logo'></Image></Link>
                        <Link href={"https://facebook.com"}><Image src={facebook} width={40} height={40} alt='facebook Logo'></Image></Link>
                        <Link href={"https://x.com"}><Image src={twitter} width={40} height={40} alt='twitter Logo'></Image></Link>
                    </div>
                </div>

                <div className='mt-3 text-center md:flex  justify-between items-center border-t border-t-[#ffffff34] pt-5 text-white/60 mb-5'>
                    <h2>© 2026 KeenKeeper. All rights reserved.</h2>
                    <div className='mt-3 flex justify-center gap-2 md:flex gap-5'>
                        <a href='/privcy-policy'>Privacy Policy</a>
                        <a href='/terms-of-service'>Terms of Service</a>
                        <a href='/cookies'>Cookies</a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;