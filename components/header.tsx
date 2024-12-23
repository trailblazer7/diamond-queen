import Image from 'next/image';
import { Container } from './index';
import UserButton from './user-button';
import CartButton from './cart-button';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
  ListItem,
} from './ui/navigation-menu';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';

const Header: React.FC = async () => {
  return (
    <header className="sticky border-b-[1px]">
      <Container className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        {/* Left side */}
        <div className="flex p-4">
          <Link href="/">
            <Image
              priority={true}
              alt="Diamond Icon"
              src="/diamond.svg"
              width={100}
              height={100}
            />
          </Link>
          <NavigationMenu>
            {/* Mobile menu */}
            <NavigationMenuList className="flex md:hidden">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px]">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/games" title="RAWG Games">
                      Games
                    </ListItem>
                    <ListItem href="/stores" title="RAWG Stores">
                      Stores
                    </ListItem>
                    <ListItem href="/leaderboard" title="RAWG Leaderboard">
                      Leaderboard
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            {/* Desktop menu */}
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/games"
                  className={navigationMenuTriggerStyle()}
                >
                  Games
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/stores"
                  className={navigationMenuTriggerStyle()}
                >
                  Stores
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/leaderboard"
                  className={navigationMenuTriggerStyle()}
                >
                  Leaderboard
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
          <UserButton />
          <CartButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
