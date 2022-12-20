

const Header = ({onDarkModeClick, isDarkMode}) => {
 
    return(
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "light" : "dark"} Mode
        </button>
      </header>
    )
}
export default Header