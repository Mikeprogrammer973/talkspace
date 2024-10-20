import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const report = {
  name: 'Report',
  email: 'support@talkspace.net',
  imageUrl:
    'https://img.icons8.com/pastel_glyph/512/228BE6/info.png',
}

const reportNavigation = [
  { name: 'Support team', href: '#' },
  { name: 'Join us', href: '#' },
  { name: 'Report a bug', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function InitHeader({selectedPage}: {selectedPage: number}) {
    const navigation = [
        { name: 'Sign in', href: '/auth/signin', current: selectedPage === 0 ? true : false},
        { name: 'Sign up', href: '/auth/signup', current: selectedPage === 1 ? true : false},
        { name: 'About us', href: '#', current: selectedPage === 2 ? true : false},
        { name: 'FAQ', href: '#', current: selectedPage === 3 ? true : false},
        { name: 'Privacy policy', href: '#', current: selectedPage === 4 ? true : false},
    ]   
  return (
      <div className="min-h-full sticky top-0 z-20">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    alt="TalkSpace"
                    src="/logo/talkspace-logo-short.png"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <h1 className='md:hidden tracking-widest text-2xl text-gray-400 hover:text-gray-200 cursor-none font-thin'>TalkSpace</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open report menu</span>
                        <img alt="" src={report.imageUrl} className="h-8 w-8 rounded-full bg-white" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {reportNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img alt="" src={report.imageUrl} className="h-10 w-10 rounded-full bg-white" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{report.name}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{report.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {reportNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                  >{item.name}</Link>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
  )
}
