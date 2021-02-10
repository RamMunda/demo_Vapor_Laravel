import headerIconPath from '../../images/image';

const Signin = () => {
    return (  
        <>
         <div className="signin">
         <div className="signin_container">
            <div className="web_icon">
                <a href="/"><img src={headerIconPath.path} alt="icon" /></a>
            </div>

            <div className="signin_content">
                <form className="input_form">
                  <label className="email">
                     <span className="">Email</span>
                     <input className="" type="email" name="email" required />
                  </label>
                  <label className="password">
                     <span className="">Password</span>
                     <input className="" type="password" name="password" required />
                  </label>
                  <label className="remember_me">
                     <div className="remember_me_check">
                         <input className="" type="checkbox" name="remember" />
                         <span className="">Remember Me</span>
                     </div>
                  </label>
                  <div className="password_reset">
                  <a className="" href="password/reset">
                        Forgot Your Password?
                  </a>
                  <button className="submit_input" type="submit">
                       Sign In
                    </button>
                  </div>
               </form>
            </div>
        </div>
    </div>
        </>
    );
}
 
export default Signin;