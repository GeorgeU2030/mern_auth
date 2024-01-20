import React from 'react'
import { useSelector } from 'react-redux';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About",
        "Sign In",
      ];
  return (
    <Navbar className='bg-blue-300'
    isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
  >
    <NavbarContent className="sm:hidden" justify="start">
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
    </NavbarContent>

    <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand>
        <p className="font-bold text-inherit">MERN AUTH</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarBrand>
        <p className="font-bold text-inherit">MERN AUTH</p>
      </NavbarBrand>
     
    </NavbarContent>

    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex mr-6">
        <Link href="/about" className='text-blue-800 font-bold'>About</Link>
      </NavbarItem>
      <NavbarItem className="hidden lg:flex mr-6">
        <Link href="/signin" className='text-blue-800 font-bold'>Login</Link>
      </NavbarItem>
      <NavbarItem>
        {currentUser ? (
          <Link href='/profile'>
         <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
         </Link>
        ) : (
        <Button as={Link} className='bg-blue-800 text-white ' href="/signup" variant="flat">
          Sign Up
        </Button>
        )}
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={
              index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
}
