import FileExplorer from "./components/FileExplorer";
import data from "./assets/data.json";
const App = () => {
  return (
    <div className="p-5">
      <FileExplorer data={data} />
    </div>
  );
};

export default App;
