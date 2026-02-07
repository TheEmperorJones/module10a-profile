import Profile from './Profile';

function App() {
  return (
    <div>
      <Profile
        name="Sidney Bechet"
        instrument="Clarinet"
        genre="Jazz"
        quote='"You gotta mean it, and you gotta treat it gentle."'
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/c1/Sidney_Bechet%2C_Freddie_Moore%2C_Lloyd_Phillips_%28Gottlieb_00521%29.jpg"
      />
    </div>
  );
}

export default App;