import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const remove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const respo = await fetch(url);
      const tours = await respo.json();
      setTours(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
      return <h1>Error.....</h1>
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>no tour left</h2>
        <div className="underline"></div>
        <button className='btn' onClick={fetchData}>refresh</button>
      </div>
    </main>
  }

  if (tours) {
    return <main>
      <Tours tours={tours} remove={remove} />
    </main>
  }
}

export default App
