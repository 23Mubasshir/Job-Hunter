import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HomeBanner from './components/HomeBanner/HomeBanner'
import CategoryList from './components/CategoryList/CategoryList'
import FeaturedJob from './components/FeaturedJob/FeaturedJob'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <HomeBanner></HomeBanner>
      <CategoryList></CategoryList>
      <FeaturedJob></FeaturedJob>
    </div>
  )
}

export default App
