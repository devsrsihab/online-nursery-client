import MainLayout from "./components/layout/MainLayout";
import usePageRefreshWarning from "./hooks/usePageRefreshWarning ";

function App() {
  usePageRefreshWarning()
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
