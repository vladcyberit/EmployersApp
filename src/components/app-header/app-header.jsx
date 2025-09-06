import "./app-header.css";

const AppHeader = () => {
    return ( 
        <div className="app-header">
            <a href="#" className="app-header-logo">Teamsy</a>
            <div className="app-header-wrapper">
                <button className="logout-btn">Logout<img src="public/arrow-down.svg" alt="logout" />
                </button>
                <img src="public/userProfile.svg" alt="userProfile" className="user-avatar"/>
            </div>
        </div>
    );
}
 
export default AppHeader;