import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <p className={classes.logo}> Navbar</p>
      <button className={classes.bottom}> Login</button>
    </div>
  )
}

export default Navbar
