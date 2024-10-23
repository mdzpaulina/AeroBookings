import admin from './assets/admin.jpg'
import './AdminPage.css'
import ExcelReader from './ExcelReader'

function AdminPage({onClickAccount}) {
    return (
        <div className="admin-page">
            <header className="header-admin">
                <div className="admin-info">
                    <h2>Hi, @Admin</h2>
                    <img src={admin} alt="User Avatar" className="avatar"/>
                </div>
            </header>

            <div className="database">
                <ExcelReader />
            </div>
            <footer className="footer">
                <button>Home</button>
                <button onClick = {onClickAccount}>Account</button>
            </footer>
        </div>
      );
}

export default AdminPage;