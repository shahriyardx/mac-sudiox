import { useState, useEffect } from 'react'

const useChart = () => {
  const [chart, setChart] = useState([])

  useEffect(() => {
    fetch("/chart.json")
      .then(response => response.json())
      .then(data => {
        setChart(data)
      })
  }, [])

  return chart
}

export default useChart