interface NavBarProps {
  title: string;
}

export const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: '#000',
      color: '#fff',
      padding: '2px',
      textAlign: 'center'
    }}>
      <h2>{title}</h2>
    </div>
  )
}