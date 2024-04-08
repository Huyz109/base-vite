import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Count } from './Count'

type People = {
  name: string;
  age: number;
  location?: string 
}

type Employee = People & {
  jobTitle: string,
  degree: string,
  level?: string | number | Degree.MASTER
}

enum Degree {
  MASTER = "MASTER",
  PROFESSIONAL = "PROFESSIONAL"
}

type ApiResponse<DataType> = {
  data: DataType,
  status: 'success' | 'failure'
}


function App() {
  const [count, setCount] = useState<number>(0)
  const [people, setPeople] = useState<People>();
  
  const userResponse : ApiResponse<{id: number; name: string}> = {
    data: {id: 1, name: 'John'},
    status: 'success'
  }

  const employee: Employee = {
    name: 'Employee',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: 'Master'
  }

  console.log(people, employee, userResponse);

  useEffect(() => {
    setPeople({
      name: 'Test',
      age: 12
    })
  }, [])
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
