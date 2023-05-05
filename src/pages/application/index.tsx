import {
  Council,
  Footer,
  Header,
  Imagen,
  Welcome,
} from '../../ui/containers/aplication'

export default function HomeAplication() {
  return (
    <div className="aplication">
      <header>
        <Header />
      </header>
      <div className="aplication__welcome">
        <Welcome />
      </div>
      <div className="aplication__council">
        <Council />
      </div>
      <div>
        <Imagen />
      </div>
      <footer className="aplication__footer">
        <Footer />
      </footer>
    </div>
  )
}
