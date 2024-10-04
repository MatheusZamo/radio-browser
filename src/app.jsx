const musicalGenres = [
  { name: "MPB", id: crypto.randomUUID() },
  { name: "Sertanejo Brasil", id: crypto.randomUUID() },
  { name: "Rádio FM", id: crypto.randomUUID() },
  { name: "Radio Sertanejo Só Modão", id: crypto.randomUUID() },
]

const App = () => {
  return (
    <div className="container">
      <aside className="aside">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="#1267FC"
              d="M20 18a1 1 0 0 1 .117 1.993L20 20H4a1 1 0 0 1-.117-1.993L4 18zm0-7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </g>
        </svg>
        <input type="text" className="input-search" placeholder="Search here" />
        <ul className="ul-genres">
          {musicalGenres.map(({ name, id }) => (
            <li key={id} className="list-genres">
              <button className="button-gender-name">{name}</button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <h1 className="title">Radio Browser</h1>
        <div className="div-options">
          <p>Favorite Radios</p>
          <button className="search">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 -5 24 24"
            >
              <path
                fill="#4e89e9"
                d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
              ></path>
            </svg>
            Search Stations
          </button>
        </div>
        <div className="stations">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2"
            ></path>
          </svg>
          <h2 className="name-station">Nome da Rádio atual</h2>
          <ul className="list-station">
            {musicalGenres.map(({ name, id }) => (
              <li key={id} className="list-radios">
                <div className="button-play">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    className="icon-play"
                  >
                    <path
                      fill="currentColor"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    ></path>
                  </svg>
                </div>
                <div className="infos">
                  <h2 className="title-radios-name">{name}</h2>
                  <span>Brasil, BH</span>
                </div>
                <div className="icons-edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 24 24"
                    className="icon-pen"
                  >
                    <path
                      fill="currentColor"
                      d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                    ></path>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export { App }
