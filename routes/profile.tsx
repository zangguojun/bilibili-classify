import { NavigateFunction, useNavigate } from "react-router-dom"

export default () => {
  const navigation: NavigateFunction = useNavigate()

  const onNextPage = (): void => {
    navigation("/")
  }

  return (
    <div style={{ padding: 16 }}>
      <span>pro page</span>
      <button onClick={onNextPage}>Home</button>
    </div>
  )
}
