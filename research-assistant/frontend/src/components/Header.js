import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Paper Analysis', href: '/paper-analysis' },
  { name: 'Research Trends', href: '/research-trends' },
  { name: 'Citation Generator', href: '/citation-generator' },
  { name: 'Research Questions', href: '/research-questions' },
  { name: 'Literature Review', href: '/literature-review' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'About', href: '/about' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();
  
  return (
    <Disclosure as="nav" className="bg-dark-900 border-b border-dark-700 shadow-lg sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="group transition-all duration-300">
                    <span className="text-primary-400 text-2xl font-bold group-hover:text-primary-300 transition-colors duration-300 flex items-center">
                      <span className="inline-block transform group-hover:scale-105 transition-transform duration-300">ResearchMate AI</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">🏠</span>
                    </span>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const isCurrentPage = location.pathname === item.href || 
                                          (location.pathname === '/' && item.href === '/');
                      
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isCurrentPage
                              ? 'bg-dark-700 text-white border-b-2 border-primary-400'
                              : 'text-gray-300 hover:bg-dark-800 hover:text-white',
                            'px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-md relative group'
                          )}
                          aria-current={isCurrentPage ? 'page' : undefined}
                        >
                          {item.name}
                          <span 
                            className={classNames(
                              'absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full',
                              isCurrentPage ? 'w-full' : 'w-0'
                            )}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-dark-800 inline-flex items-center justify-center p-3 rounded-md text-gray-300 hover:text-white hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 shadow-lg hover:shadow-primary-500/20">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800 shadow-lg rounded-b-lg">
              {navigation.map((item) => {
                const isCurrentPage = location.pathname === item.href || 
                                     (location.pathname === '/' && item.href === '/');
                
                return (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isCurrentPage
                        ? 'bg-dark-700 text-white border-l-4 border-primary-400'
                        : 'text-gray-300 hover:bg-dark-700 hover:text-white',
                      'block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:shadow-inner'
                    )}
                    aria-current={isCurrentPage ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 