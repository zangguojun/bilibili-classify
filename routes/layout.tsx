import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/outline"
import classnames from "classnames"
import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"

import "~style.css"

const user = {
  name: "Tom Cook",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}
const navigation = [
  { name: "Index", href: "#/" },
  { name: "About", href: "#/about" }
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
]

const noticeClass = classnames(
  "flex-shrink-0",
  "rounded-full",
  "text-pink-100",
  "bg-pink-400",
  "focus:outline-none"
)

export default () => {
  const [curIndex, setCurIndex] = useState(0)

  const getNavClass = (isCur) =>
    classnames(
      "p-3",
      "rounded-md",
      "font-medium",
      isCur
        ? ["bg-pink-600", "text-pink-100"]
        : ["text-pink-100", "hover:bg-pink-600", "hover:text-pink-100"]
    )

  return (
    <div className={classnames("min-h-full")}>
      <Disclosure as="nav" className={classnames("bg-pink-400")}>
        {({ open }) => (
          <div className={classnames("max-w-7xl", "mx-auto", "px-4")}>
            {open}
            <div
              className={classnames(
                "flex",
                "items-center",
                "justify-between",
                "h-16"
              )}>
              {/* 左侧 */}
              <div className={classnames("flex", "items-center")}>
                <div className="flex-shrink-0">
                  <img
                    className={classnames("h-8", "w-8")}
                    src="http://pic.fxxz.com/up/2017-2/2017224172317484.png"
                    alt="logo"
                  />
                </div>
                <div
                  className={classnames(
                    "flex",
                    "items-baseline",
                    "ml-10",
                    "space-x-4"
                  )}>
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setCurIndex(index)}
                      className={getNavClass(curIndex === index)}
                      aria-current={curIndex === index ? "page" : undefined}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* 右侧 */}
              <div
                className={classnames(
                  "flex",
                  "items-center",
                  "ml-4",
                  "md:ml-6"
                )}>
                {/* 通知 */}
                <button type="button" className={noticeClass}>
                  <span className="sr-only">通知</span>
                  <BellIcon
                    className={classnames("h-6", "w-6")}
                    aria-hidden="true"
                  />
                </button>

                {/* 个人 */}
                <Menu as="div" className={classnames("ml-3", "relative")}>
                  <Menu.Button
                    className={classnames([
                      "flex",
                      "items-center",
                      "max-w-xs",
                      "bg-pink-400",
                      "text-pink-100",
                      "rounded-full",
                      "text-sm",
                      "focus:outline-none"
                    ])}>
                    <span className="sr-only">菜单</span>
                    <img
                      className={classnames("h-8", "w-8", "rounded-full")}
                      src={user.imageUrl}
                      alt="头像"
                    />
                    <span className={classnames("ml-3", "")}>{user.name}</span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter={classnames("transition", "ease-out", "duration-100")}
                    enterFrom={classnames("transform", "opacity-0", "scale-95")}
                    enterTo={classnames(
                      "transform",
                      "opacity-100",
                      "scale-100"
                    )}
                    leave={classnames("transition", "ease-in", "duration-75")}
                    leaveFrom={classnames(
                      "transform",
                      "opacity-100",
                      "scale-100"
                    )}
                    leaveTo={classnames("transform", "opacity-0", "scale-95")}>
                    <Menu.Items
                      className={classnames(
                        "origin-top-right",
                        "absolute",
                        "right-0",
                        "mt-2",
                        "w-48",
                        "rounded-md",
                        "shadow-lg",
                        "py-1",
                        "bg-white",
                        "focus:outline-none"
                      )}>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classnames(
                                "block",
                                "px-4",
                                "py-2",
                                "text-sm",
                                "text-pink-700",
                                {
                                  "bg-pink-100": active
                                }
                              )}>
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        )}
      </Disclosure>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-pink-900">Dashboard</h1>
        </div>
      </header> */}
      <main>
        <div className="max-w-7xl mx-auto py-6">
          {/* Replace with your content */}
          {/* <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-pink-200 rounded-lg h-96" />
          </div> */}
          <Outlet />
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}
