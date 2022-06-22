export {}

chrome.contextMenus.create({
  id: "about",
  contexts: ["action"],
  title: "Up分类"
})

chrome.contextMenus.onClicked.addListener(async ({ menuItemId }) => {
  await chrome.tabs.create({ url: `/options.41e68877.html#/${menuItemId}` })
})
