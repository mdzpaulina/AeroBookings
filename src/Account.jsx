import './Account.css';

function Account({ onClickHome, onClickBook, onClickTravels}) {
    return (
      <div className="account-page">
        <h1>My Account</h1>
        
        {/* Sección de Información del Usuario */}
        <section className="account-info">
          <h2>Personal Information</h2>
          <div className="info-field">
            <p><strong>Full Name:</strong> John Doe</p>
          </div>
          <div className="info-field">
            <p><strong>Email:</strong> john.doe@example.com</p>
          </div>
          <div className="info-field">
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </div>
          <button>Edit Information</button>
        </section>
  
        {/* Sección de Seguridad */}
        <section className="account-security">
          <h2>Security</h2>
          <div className="security-option">
            <p><strong>Password:</strong> ********</p>
            <button>Change Password</button>
          </div>
        </section>
  
        {/* Sección de Cerrar Sesión */}
        <section className="account-logout">
          <button className="logout-btn">Log Out</button>
        </section>
  
        <footer className="footer">
            <button onClick={onClickHome}>Home</button> 
            <button onClick={onClickBook}>Book</button>
            <button onClick={onClickTravels}>Travels</button>
            <button>Account</button>
        </footer>
      </div>
    );
}

export default Account;