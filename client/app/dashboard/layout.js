'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import {
  Cog6ToothIcon,
  HomeIcon,
  MusicalNoteIcon,
  PlayIcon,
  PhotoIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function RootLayout({ children }) {
  const path = usePathname();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: HomeIcon,
    },
    {
      name: 'Videos',
      href: '/dashboard/videos',
      icon: PlayIcon,
    },
    {
      name: 'Music',
      href: '/dashboard/music',
      icon: MusicalNoteIcon,
    },
    {
      name: 'Images',
      href: '/dashboard/images',
      icon: PhotoIcon,
    },
  ];

  // get user info
  //   const { username } = JSON.parse(localStorage.getItem('cfin'));
  let username;
  if (typeof window !== 'undefined') {
    const data = JSON.parse(window.localStorage.getItem('cfin'));
    username = data ? data.username : null;
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-900/80' />
            </Transition.Child>

            <div className='fixed inset-0 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button
                        type='button'
                        className='-m-2.5 p-2.5'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10'>
                    <div className='flex h-16 shrink-0 items-center'>
                      {/* <Image
                        className='h-8 w-auto'
                        width={32}
                        height={32}
                        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                        alt='Your Company'
                      /> */}
                      <h1>C-FIN</h1>
                    </div>
                    <nav className='flex flex-1 flex-col'>
                      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                          <ul role='list' className='-mx-2 space-y-1'>
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={
                                    path === item.href
                                      ? 'bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                                  }
                                >
                                  <item.icon
                                    className='h-6 w-6 shrink-0'
                                    aria-hidden='true'
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className='mt-auto'>
                          <Link
                            href='/settings'
                            className={
                              path === '/dashboard/settings'
                                ? 'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white bg-gray-800'
                                : 'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
                            }
                          >
                            <Cog6ToothIcon
                              className='h-6 w-6 shrink-0'
                              aria-hidden='true'
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
          <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4'>
            <div className='flex h-16 shrink-0 items-center'>
              {/* <Image
                className='h-8 w-auto'
                width={32}
                height={32}
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              /> */}
              <h1>C-FIN</h1>
            </div>
            <nav className='flex flex-1 flex-col'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={
                            path === item.href
                              ? 'bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                          }
                        >
                          <item.icon
                            className='h-6 w-6 shrink-0'
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className='mt-auto'>
                  <Link
                    href='/dashboard/settings'
                    className={
                      path === '/dashboard/settings'
                        ? 'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white bg-gray-800'
                        : 'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
                    }
                  >
                    <Cog6ToothIcon
                      className='h-6 w-6 shrink-0'
                      aria-hidden='true'
                    />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-72'>
          <main className='py-10'>
            <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
