import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import classnames from "classnames"

import "~style.css"

const qa = [
  {
    path: "/",
    question: "该插件有什么作用?",
    answer: `1、智能/手动分类已关注UP
    2、智能/手动分类已收藏作品`
  },

  { path: "/about", question: "如何使用?", answer: "右键点击插件，选择“选项”" }
]

export default () => {
  return (
    <div className={classnames("w-80", "h-auto", "p-4", "bg-pink-50")}>
      {qa.map(({ question, answer, path }, index) => {
        return (
          <Disclosure as="div" className={classnames({ "mt-2": index !== 0 })}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={classnames(
                    "flex",
                    "w-full",
                    "justify-between",
                    "rounded-lg",
                    "bg-pink-200",
                    "px-4",
                    "py-2",
                    "text-left",
                    "text-sm",
                    "font-medium",
                    "text-pink-900"
                  )}>
                  <span>{question}</span>
                  <ChevronUpIcon
                    className={classnames("h-5", "w-5", "text-pink-500", {
                      "rotate-180 transform": open
                    })}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={classnames(
                    "px-4",
                    "pt-4",
                    "pb-2",
                    "text-sm",
                    "text-pink-900"
                  )}>
                  {answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
}
