import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Dashboard/Header"

function App() {

  return (
    <div className="flex gap-4 h-screen">
      <div className="flex flex-col bg-white rounded-lg m-4 shadow w-full">
        
      <Header/>
      
      <Dashboard />
    </div></div>
  )
}

export default App
