import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div className="app-container">
      <Header />
      {/* Aquí irán las páginas que crees con React Router */}
      <main>
        <Carousel />
        {/* Aquí se renderizará el contenido de las diferentes páginas */}
      </main>
    </div>
  );
}


export default App;
