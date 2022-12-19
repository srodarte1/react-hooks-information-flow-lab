

const Header = ({onDarkModeClick, isDarkMode}) => {
 
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "dark" : "light"} Mode
        </button>
      </header>
    )
}
export {Header}