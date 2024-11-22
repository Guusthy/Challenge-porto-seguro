import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={styles.layout}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img
            src="/path/to/your/logo.png"
            alt="Logo da aplicação"
            style={styles.logoImg}
          />
        </div>
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="/" style={styles.navLink}>Início</a>
            </li>
            <li style={styles.navItem}>
              <a href="/about" style={styles.navLink}>Sobre</a>
            </li>
            <li style={styles.navItem}>
              <a href="/contact" style={styles.navLink}>Contato</a>
            </li>
            <li style={styles.navItem}>
              <a href="/login" style={{ ...styles.navLink, ...styles.btnLogin }}>Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <main style={styles.mainContent}>
        {children}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 - FIAP - Faculdade de Informática e Administração Paulista.</p>
        <p>Fale conosco - (11) 97968-0993</p>
      </footer>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #141E30, #243B55)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: 'rgba(51, 51, 51, 0.95)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '2px solid #FFD700',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    maxHeight: '50px',
  },
  navbar: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  btnLogin: {
    backgroundColor: '#007BFF',
    padding: '8px 16px',
    borderRadius: '5px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  mainContent: {
    flexGrow: 1,
    padding: '20px',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    textAlign: 'center',
    padding: '15px',
    borderTop: '2px solid #FFD700',
    fontSize: '0.9rem',
    color: '#ccc',
  },
};

export default Layout;
