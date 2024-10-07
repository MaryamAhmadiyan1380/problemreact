import{Link} from 'react-router-dom'
export const Nav = () => {
    
    return( 
    //     <Router>
    //     <Nav/>
    //     <Routes>
    //       <Route path='/' element={<Home/>}/>
    //       <Route path='/user' element={<User/>}/>
    //       <Route path='/add' element={<Add/>}/>
    //       <Route path='/profile' element={<Profile/>}/>
    //       <Route path='/exit' element={<Exit/>}/>
    //       <Route path='*' element={<div>this page is not foun</div>}  />
    //     </Routes>
    //   </Router>
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/user">UserList</Link> |
        <Link to="/add">AddPost</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/exit">Exit</Link>
        </nav>
    )
}