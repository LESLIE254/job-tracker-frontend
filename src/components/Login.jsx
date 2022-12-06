export default function Login(){
    return(
        <>
        <div id="loginContainer">

            <section id="loginModal">
            <span className="smallText">Welcome back! 👋</span>

            <p>Sign in to your account</p>

            <input type="email" name="email"
            placeholder="Your email"/>

            <input type="password" name="password"
            placeholder="Your Password"/>

            <button name="submit">
                Sign In
            </button>
            <a href="#" className="forgotPassword">
                Forgot Password?
            </a>


            <a href="#" className="signUpLink"> Don't have an account? Sign Up </a>
            </section>
        </div>
        
        </>
    )
}