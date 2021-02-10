const HomeContent = () => {
    return ( 
        <>
        <div className="homecontent">
            <div className="homecontentcontainer">
                <h1><span className="blue-color_font">Incredible scale </span>without <br></br>breaking a sweat.</h1>
                <p>Laravel Vapor is a serverless deployment platform for Laravel, powered by AWS. Launch your Laravel infrastructure on Vapor and fall in love with the scalable simplicity of serverless.</p>
                <div className="homecontentButoton">
                    <a className="signup" href="/signup">Sign Up now</a>
                    <a className="doc" href="/doc">Documentaion</a>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default HomeContent;