interface NavBarProps {
  title: string;
}

export const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <div style={{
      background: '#000',
      color: '#fff',
      padding: '2px',
      textAlign: 'center'
    }}>
      <h3>{title}</h3>
    </div>
  )
}