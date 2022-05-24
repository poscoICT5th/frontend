/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'

const navigation = {
  categories: [
    {
      id: '물류관리',
      name: '물류관리',
      featured: [

      ],
      sections: [
        {
          id: '입고관리',
          name: '입고관리',
          items: [
            { name: '현재고 조회', to: 'PreparingPage' },
            { name: 'LOT 병합, 병합해제 관리', to: 'PreparingPage' },
            { name: '창고 내 LOT 분리', to: 'PreparingPage' },
            { name: '입고물품 창고이동 승인확인', to: 'LogisticsList' },
            { name: '기타 입, 출고 등록', to: 'PreparingPage' },
          ],
        },
        {
          id: '출고관리',
          name: '출고관리',
          items: [
            { name: '출하요청내역', to: 'LogisticsList' },
            { name: '출하확정', to: 'PreparingPage' },
            { name: '운송비정산', to: 'PreparingPage' },
            { name: '매출마감', to: 'PreparingPage' },
            { name: '준비중', to: 'PreparingPage' },
            { name: '준비중', to: 'PreparingPage' },
          ],
        },
        {
          id: '이송관리',
          name: '이송관리',
          items: [
            { name: '출하요청내역', to: 'LogisticsList' },
            { name: '출하확정', to: 'PreparingPage' },
            { name: '운송비정산', to: 'PreparingPage' },
            { name: '매출마감', to: 'PreparingPage' },
            { name: '준비중', to: 'PreparingPage' },
          ],
        },
      ],
    },
    {
      id: '재고관리',
      name: '재고관리',
      featured: [
      ],
      sections: [
        {
          id: '조회',
          name: '조회',
          items: [
            { name: '전체조회', to: 'InventoryList' },
            { name: 'Pants', to: 'PreparingPage' },
            { name: 'Sweaters', to: 'PreparingPage' },
            { name: 'T-Shirts', to: 'PreparingPage' },
            { name: 'Jackets', to: 'PreparingPage' },
            { name: 'Activewear', to: 'PreparingPage' },
            { name: 'Browse All', to: 'PreparingPage' },
          ],
        },
        {
          id: '출고',
          name: '출고',
          items: [
            { name: 'Watches', to: 'PreparingPage' },
            { name: 'Wallets', to: 'PreparingPage' },
            { name: 'Bags', to: 'PreparingPage' },
            { name: 'Sunglasses', to: 'PreparingPage' },
            { name: 'Hats', to: 'PreparingPage' },
            { name: 'Belts', to: 'PreparingPage' },
          ],
        },
        {
          id: '이송',
          name: '이송',
          items: [
            { name: 'Re-Arranged', to: 'PreparingPage' },
            { name: 'Counterfeit', to: 'PreparingPage' },
            { name: 'Full Nelson', to: 'PreparingPage' },
            { name: 'My Way', to: 'PreparingPage' },
          ],
        },
      ],
    },
    {
      id: '창고관리',
      name: '창고관리',
      featured: [

      ],
      sections: [
        {
          id: '조회',
          name: '조회',
          items: [
            { name: 'Tops', to: 'PreparingPage' },
            { name: 'Pants', to: 'PreparingPage' },
            { name: 'Sweaters', to: 'PreparingPage' },
            { name: 'T-Shirts', to: 'PreparingPage' },
            { name: 'Jackets', to: 'PreparingPage' },
            { name: 'Activewear', to: 'PreparingPage' },
            { name: 'Browse All', to: 'PreparingPage' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', to: 'PreparingPage' },
            { name: 'Wallets', to: 'PreparingPage' },
            { name: 'Bags', to: 'PreparingPage' },
            { name: 'Sunglasses', to: 'PreparingPage' },
            { name: 'Hats', to: 'PreparingPage' },
            { name: 'Belts', to: 'PreparingPage' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', to: 'PreparingPage' },
            { name: 'Counterfeit', to: 'PreparingPage' },
            { name: 'Full Nelson', to: 'PreparingPage' },
            { name: 'My Way', to: 'PreparingPage' },
          ],
        },
      ],
    },

    {
      id: '재고현황조회',
      name: '재고현황조회',
      featured: [

      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', to: 'PreparingPage' },
            { name: 'Pants', to: 'PreparingPage' },
            { name: 'Sweaters', to: 'PreparingPage' },
            { name: 'T-Shirts', to: 'PreparingPage' },
            { name: 'Jackets', to: 'PreparingPage' },
            { name: 'Activewear', to: 'PreparingPage' },
            { name: 'Browse All', to: 'PreparingPage' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', to: 'PreparingPage' },
            { name: 'Wallets', to: 'PreparingPage' },
            { name: 'Bags', to: 'PreparingPage' },
            { name: 'Sunglasses', to: 'PreparingPage' },
            { name: 'Hats', to: 'PreparingPage' },
            { name: 'Belts', to: 'PreparingPage' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', to: 'PreparingPage' },
            { name: 'Counterfeit', to: 'PreparingPage' },
            { name: 'Full Nelson', to: 'PreparingPage' },
            { name: 'My Way', to: 'PreparingPage' },
          ],
        },
      ],
    },

    {
      id: '재고위치MAP',
      name: '재고위치MAP',
      featured: [
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', to: 'PreparingPage' },
            { name: 'Pants', to: 'PreparingPage' },
            { name: 'Sweaters', to: 'PreparingPage' },
            { name: 'T-Shirts', to: 'PreparingPage' },
            { name: 'Jackets', to: 'PreparingPage' },
            { name: 'Activewear', to: 'PreparingPage' },
            { name: 'Browse All', to: 'PreparingPage' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', to: 'PreparingPage' },
            { name: 'Wallets', to: 'PreparingPage' },
            { name: 'Bags', to: 'PreparingPage' },
            { name: 'Sunglasses', to: 'PreparingPage' },
            { name: 'Hats', to: 'PreparingPage' },
            { name: 'Belts', to: 'PreparingPage' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', to: 'PreparingPage' },
            { name: 'Counterfeit', to: 'PreparingPage' },
            { name: 'Full Nelson', to: 'PreparingPage' },
            { name: 'My Way', to: 'PreparingPage' },
          ],
        },
      ],
    },

  ],
  pages: [
    //  { name: '재고위치MAP', to: 'PreparingPage' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  let navigate = useNavigate();
  function toPage(page) {
    setOpen(false)
    navigate(`/${page}`);
  }
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/MainDashboardJunior">
                  <img
                    className="h-8 w-auto"
                    src="https://www.poscoict.com/images/kor5/common/h1_posco.png"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500 z-40 bg-white">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900 text-xl">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <p className="hover:text-gray-800 cursor-pointer" onClick={() => { toPage(item.to) }}>
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Logout
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden bg-white" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto ">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="hover:text-gray-800 cursor-pointer" onClick={() => { toPage(item.to) }}>
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <p href="#" className="-m-2 p-2 block font-medium text-gray-900">
                      Logout
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default Navbar