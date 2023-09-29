import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <a href="" className={classes.logo}>
        {' '}
        Navbar
      </a>
      <button className={classes.bottom}> Login</button>
    </div>
  )
}

export default Navbar
