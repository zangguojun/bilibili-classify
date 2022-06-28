import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/outline"
import classnames from "classnames"
import _ from "lodash"
import { Fragment, createContext, useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

import { BilibiliApi } from "~src/api"
import "~style.css"

const navigation = [
  { name: "主页", href: "/" },
  { name: "UP分类", href: "/up" },
  { name: "关于", href: "/about" }
]
const userNavigation = [
  {
    name: "退出账号",
    href: "/login",
    onClick: () => {
      alert("logged out")
    }
  }
]

const noticeClass = classnames(
  "flex-shrink-0",
  "rounded-full",
  "text-pink-100",
  "bg-pink-400",
  "focus:outline-none"
)

const defaultUser = {
  isLogin: false,
  name: "游客",
  face: "https://i0.hdslb.com/bfs/face/member/noface.jpg"
}

export const GlobalContext = createContext<{ user: IUser }>({
  user: defaultUser
})

export default () => {
  const getNavClass = (isActive) =>
    classnames(
      "p-3",
      "rounded-md",
      "font-medium",
      isActive
        ? ["bg-pink-600", "text-pink-100"]
        : ["text-pink-100", "hover:bg-pink-600", "hover:text-pink-100"]
    )
  const [user, setUser] = useState<IUser>(defaultUser)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    BilibiliApi.Instance()
      .myInfo()
      .then((res) => {
        if (res) {
          setUser({ ...res, isLogin: true })
        } else {
          setIsOpen(true)
        }
      })
  }, [])

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
                  <svg
                    className={classnames("h-16", "w-16", "ml-20")}
                    viewBox="0 0 2299 1024"
                    version="1.1"
                    p-id="1727">
                    <path
                      d="M1775.840814 322.588002c6.0164 1.002733 53.144869-9.525967 55.150336-6.016401 3.0082 4.5123 24.065601 155.92504 18.550567 156.927774s-44.621635 10.027334-44.621635 10.027334c-3.0082-20.556034-28.577901-147.903173-29.079268-160.938707m75.205003-14.539634l20.556034 162.944174c10.5287-0.501367 53.144869-3.509567 57.155803-4.010934-6.0164-61.668103-16.545101-158.933241-16.545101-158.93324-20.054668-4.010934-41.112069-4.010934-61.166736 0m-40.610702 226.116376s92.752838-23.564234 126.344406-12.0328c17.046467 61.668103 48.131202 407.611118 51.139402 421.649386-21.057401 2.506833-90.246004 8.523234-95.761037 10.027333-4.5123-26.071068-81.72277-403.098818-81.722771-419.643919m343.436183-207.565809c5.515034 1.5041 54.648969-5.013667 55.150335-1.5041 1.002733 12.032801 6.0164 157.42914 0.501367 157.930507s-44.621635 4.010934-44.621635 4.010934c-1.002733-20.054668-12.032801-146.90044-11.030067-160.437341m75.70637-4.010933l4.010933 160.938707c10.5287 0 52.643502 2.506833 57.155803 2.005467-1.002733-61.668103 0-158.933241 0-158.933241-20.054668-3.509567-40.610702-5.013667-61.166736-4.010933m-64.676303 216.089043s94.758304-12.534167 126.845772 2.506833c7.019134 72.196803 6.0164 408.613852 7.019134 422.652119-21.558768 0-90.246004 1.002733-95.761038 2.005467-1.002733-26.071068-39.607968-410.619319-38.103868-427.164419m-220.099977-413.627519c54.648969 278.759879 96.262404 755.058234 97.766504 785.641602 0 0 43.117535 1.002733 91.750105 4.010934C2105.740095 614.383415 2070.644427 134.575493 2071.145794 119.033126c-12.032801-13.536901-126.344406 6.0164-126.344406 6.0164m-120.328005 659.297196c-10.5287-78.213204-290.291313-166.955108-447.720454-138.377206 0 0-19.553301-172.470141-27.073801-339.425248-6.517767-143.390873-1.002733-282.770813 0.501366-305.833681-10.5287-7.5205-123.837572 46.627102-185.004308 69.188603 0 0 73.199537 309.844614 126.344406 952.59671 0 0 84.730971 9.0246 230.12731-19.051934s317.365114-115.815705 302.825481-219.097244m-341.932083 140.88404l-24.566967-176.982441c6.0164-3.0082 156.927774 53.144869 172.971507 63.172203-2.506833 11.030067-148.40454 113.810238-148.40454 113.810238M610.664628 322.588002c6.0164 1.002733 53.144869-9.525967 55.150335-6.016401 3.0082 4.5123 24.065601 155.92504 18.550568 156.927774s-44.621635 10.027334-44.621635 10.027334c-3.0082-20.556034-28.577901-147.903173-29.079268-160.938707m75.205003-14.539634l20.556034 162.944174c10.5287-0.501367 53.144869-3.509567 57.155803-4.010934-6.517767-61.668103-16.545101-158.933241-16.545101-158.93324-20.054668-4.010934-41.112069-4.010934-61.166736 0m-40.610702 226.116376s92.752838-23.564234 126.344406-12.0328c17.046467 61.668103 48.131202 407.611118 51.139402 421.649386-21.057401 2.506833-90.246004 8.523234-95.761037 10.027333-4.5123-26.071068-81.72277-403.098818-81.722771-419.643919m343.436182-207.565809c5.515034 1.5041 54.648969-5.013667 55.150336-1.5041 1.002733 12.032801 6.0164 157.42914 0.501367 157.930507s-44.621635 4.010934-44.621635 4.010934c-1.002733-20.054668-11.531434-146.90044-11.030068-160.437341m75.706371-4.010933l4.010933 160.938707c10.5287 0 52.643502 2.506833 57.155803 2.005467-1.002733-61.668103 0-158.933241 0-158.933241-20.054668-3.509567-40.610702-4.5123-61.166736-4.010933m-64.676303 216.089043s94.758304-12.534167 126.845772 2.506833c7.019134 72.196803 6.0164 408.613852 7.019134 422.652119-21.558768 0-90.246004 1.002733-95.761038 2.005467-0.501367-26.071068-39.607968-410.619319-38.103868-427.164419m-220.099977-413.627519c54.648969 278.759879 96.262404 755.058234 97.766504 785.641602 0 0 43.117535 1.002733 91.750105 4.010934-28.577901-300.318647-63.67357-780.126569-63.172203-796.170303-12.032801-13.035534-126.344406 6.517767-126.344406 6.517767m-120.328005 659.297196c-10.5287-78.213204-290.291313-166.955108-447.720454-138.377206 0 0-19.553301-172.470141-27.073801-339.425248-6.517767-143.390873-1.002733-282.770813 0.501366-305.833681C174.475608-6.308547 61.166736 47.337689 0 69.89919c0 0 73.199537 309.844614 126.344406 952.59671 0 0 84.730971 9.0246 230.12731-19.051934s317.365114-115.815705 302.825481-219.097244m-341.932083 140.88404l-24.566967-176.982441c6.0164-3.0082 156.927774 53.144869 172.971507 63.172203-2.506833 11.030067-148.40454 113.810238-148.40454 113.810238"
                      p-id="1728"
                      fill="#FDF2F8"></path>
                  </svg>
                </div>
                <div
                  className={classnames(
                    "flex",
                    "items-baseline",
                    "ml-10",
                    "space-x-4"
                  )}>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => getNavClass(isActive)}>
                      {item.name}
                    </NavLink>
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
                    <span className="sr-only">头像</span>
                    <img
                      className={classnames("h-8", "w-8", "rounded-full")}
                      src={user.face}
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
                            <NavLink
                              key={item.name}
                              to={item.href}
                              onClick={item.onClick}
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
                            </NavLink>
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={classnames("relative", "z-10")}
          onClose={() => setIsOpen(false)}>
          <div className={classnames("fixed", "inset-0", "overflow-y-auto")}>
            <div
              className={classnames(
                "flex",
                "min-h-full",
                "items-center",
                "justify-center"
              )}>
              <Transition.Child
                as={Fragment}
                enter={classnames("transition", "ease-out", "duration-100")}
                enterFrom={classnames("transform", "opacity-0", "scale-95")}
                enterTo={classnames("transform", "opacity-100", "scale-100")}
                leave={classnames("transition", "ease-in", "duration-75")}
                leaveFrom={classnames("transform", "opacity-100", "scale-100")}
                leaveTo={classnames("transform", "opacity-0", "scale-95")}>
                <Dialog.Panel
                  className={classnames(
                    "w-full",
                    "p-4",
                    "max-w-md",
                    "transform",
                    "overflow-hidden",
                    "rounded-2xl",
                    "bg-pink-50",
                    "align-middle",
                    "shadow-2xl",
                    "transition-all",
                    "text-center"
                  )}>
                  <Dialog.Title
                    as="h3"
                    className={classnames(
                      "text-lg",
                      "font-medium",
                      "leading-6",
                      "text-pink-400"
                    )}>
                    您还未登录Bilibili账号！
                  </Dialog.Title>
                  <p
                    className={classnames(
                      "mt-5",
                      "text-base",
                      "text-gray-500"
                    )}>
                    请先前往Bilibili官网进行登录！
                  </p>
                  <button
                    type="button"
                    className={classnames(
                      "inline-flex",
                      "justify-center",
                      "rounded-md",
                      "border",
                      "border-pink-200",
                      "bg-pink-100",
                      "mt-5",
                      "px-4",
                      "py-2",
                      "text-sm",
                      "font-medium",
                      "text-pink-600",
                      "hover:bg-pink-200",
                      "focus:outline-none"
                    )}
                    onClick={() => {
                      setIsOpen(false)
                      window.open("https://www.bilibili.com")
                    }}>
                    现在就去！
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <main>
        <div className="max-w-7xl mx-auto py-6">
          {user.isLogin ? (
            <GlobalContext.Provider value={{ user }}>
              <Outlet />
            </GlobalContext.Provider>
          ) : (
            <div
              className={classnames(
                "mt-20",
                "text-center",
                "text-lg",
                "text-pink-300"
              )}>
              请你先登录!
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
