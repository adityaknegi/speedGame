import { useEffect } from "react";
const { default: Logo } = require("atoms/Logo")
import Link from 'next/link'
import { useRouter } from "next/router";
import Container from "@/atoms/Container";

const Header = ({  ...properties }) => {
	const router = useRouter();

    useEffect(() => {

    },[])


	const menus = [
        {
			label : 'Instruction',
			url : '#About'
		},
        {
			label : 'Home',
			url : '#'
		},
        
	
	]
    return (
        <>
        <header className={`header w-full bg-red-900 bg-opacity-[0.2]  md:h-20.25 relative  pt-2.5 md:py-6 z-20  shadow  
        

        `}>
            <Container className='flex items-center justify-between py-2 '>

                <div className="flex items-center justify-between container">

                    <Link href={`/`}  className="w-2/12">
                        <Logo 
                            desktopLogoClassName="hidden md:inline-block flex "
                            mobileLogoClassName="inline-block md:hidden w-9"
                            alt="portfolio Logo"
                            src={`/images/portfolio_logo.svg`}
                            mobileLogoSrc={`/images/portfolio_logo.svg`}
                            isMobileLogo={true}
                            width="84"
                            height="26"
                            M_width="32"
                            M_height="33"
                            />
                    </Link>
                    <h1 className="text-sm md:text-2xl text-white ">Number Clicking Game</h1>

                    <div  className="w-10/12 flex flex-row-reverse ">
                        {
                            menus.map((menu, index) => {
                                return (
                                    <Link key={index} href={menu.url}>
                                        <div className={`text-black-100 hover-rotate mr-6 font-bold  ${router.asPath === menu.url ? 'md:active-border-bottom active-border-bottom ' : ''}`}>
                                            {menu.label}
                                            {}
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                
            </div>
            </Container>

        </header>
        </>
    )
}
export default Header;