import Navbar from "./components/ui/navbar";
import Grid from "./components/custom/grid";
import Keyboard from "./components/custom/Keyboard";
function App() {
  const size = 5;
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-2 uppercase mb-14">
        {Array.from({ length: size }, (_, index) => (
          <Grid size={5} key={index} />
        ))}
      </div>
      <Keyboard />
    </>
  );
}

export default App;
