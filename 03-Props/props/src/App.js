import './App.css';

//Component import
import User from './components/User';

//Prop Güvenliği için PropTypes import
import PropTypes from 'prop-types';

//Schools Obje in array
const schools = [
  {
    id: 0,
    name: "Teletaş İlk Öğretim Okulu",
    no: 1229
  },
  {
    id: 1,
    name: "Asiye Ağaoğlu Anadolu Lisesi",
    no: 39
  },
  {
    id: 2,
    name: "Trakya Üniversitesi",
    no: 2141051002
  }
]

//Address Object Created
const address = {
  title: "Çanakkale/Merkez",
  zip: "171700"
}


function App() {
  return (
    <div>
      {/* Props Gönderimi */}
     <User name={"Ersin"} surName={"Göç"} age={19} isLoggedIn={true} friends= {["Ali", "Ahmet", "Ayşe"]} schools= {schools} address = {address} />
    </div>
  );
}

//Prop veri güvenliği sağlanması ve isRequired ile zorunlu alan oluşturulması ve oneOfType ile çoklu yapı oluşturulması, aynı zamanda shape ile object türündeki çok farklı veri yapılarını ayrı ayrı tanımlayabiliriz
User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  age: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  ).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array.isRequired,
  schools: PropTypes.array,
  address: PropTypes.shape(
    {
      title: PropTypes.string,
      zip: PropTypes.oneOfType(
        [
          PropTypes.number, PropTypes.string
        ]
      )
    }
  ).isRequired
}

//Default olarak veri girilmesini sağladık
User.defaultProps = {
  name: "İsimsiz",
  isLoggedIn: false
}

export default App;
