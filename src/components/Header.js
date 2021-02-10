import headerIconPath from '../images/image';
import '../css/Header.css';
console.log(headerIconPath.path);
const Header = () => {
    return ( 
        <>
        <div className="header_container">
            <div className="header_content">
                <div className="header_icon">
                    <div className="header_icon_image">
                        <img src={headerIconPath.path} alt="image" />
                    </div>
                    <div className="header_signin_menu">
                        Laravel Vapor
                    </div>
                </div>
                <div className="signin_button">
                    <a href="/login">Sign In</a>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Header;