import { useState } from "react"
import { Aside } from "./components/aside"
import { ListOfMyRadios } from "./components/list-of-my-radios"

const App = () => {
  const [radios, setRadios] = useState([{}])
  const [savedRadios, setSavedRadios] = useState([])

  return (
    <div className="container">
      <Aside
        radios={radios}
        setRadios={setRadios}
        setSavedRadios={setSavedRadios}
      />
      <ListOfMyRadios setRadios={setRadios} savedRadios={savedRadios} />
    </div>
  )
}

export { App }
