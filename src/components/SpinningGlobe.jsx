import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

export default function SpinningGlobe({ worldTopoData }) {
  const svgRef = useRef();
  const [rotation, setRotation] = useState([0, 0]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  
  useEffect(() => {
    if (!worldTopoData) return;
    const width = 400;
    const height = 400;
    
    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();
    
    const projection = d3.geoOrthographic()
      .scale(200)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .rotate(rotation);
    
    const path = d3.geoPath().projection(projection);
    
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
    
    // Convert TopoJSON to GeoJSON
    let countries;
    if (worldTopoData.objects.countries) {
      countries = topojson.feature(worldTopoData, worldTopoData.objects.countries);
    } else if (worldTopoData.objects.land) {
      countries = topojson.feature(worldTopoData, worldTopoData.objects.land);
    } else {
      // Try the first available object
      const firstObjectKey = Object.keys(worldTopoData.objects)[0];
      countries = topojson.feature(worldTopoData, worldTopoData.objects[firstObjectKey]);
    }
    
    // Add countries/land
    svg.selectAll(".land")
      .data(countries.features)
      .enter().append("path")
      .attr("class", "land")
      .attr("d", path)
      .style("fill", "rgba(188,188,188,0.94)")
      .style("stroke", "rgba(100,100,100,0.3)")
      .style("stroke-width", "0.5px");
    
  }, [worldTopoData, rotation]);
  
  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setRotation(prev => [prev[0] + 0.5, prev[1]]);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isAutoRotating]);
  
  // Mouse interaction
  const handleMouseMove = (event) => {
    setIsAutoRotating(false);
    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const λ = d3.scaleLinear().domain([0, 400]).range([-180, 180]);
    const φ = d3.scaleLinear().domain([0, 400]).range([90, -90]);
    
    setRotation([λ(x), φ(y)]);
  };
  
  const handleMouseLeave = () => {
    // Resume auto-rotation after 2 seconds
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 2000);
  };
  
  return (
    <div className="  flex flex-col items-center justify-center pt-5">
      <div className="flex justify-center">
        <svg
          ref={svgRef}
          className="rounded-full shadow-lg cursor-grab active:cursor-grabbing"
          style={{
            background: 'rgba(50,167,224,0.4)',
            boxShadow: '0 0 10px rgba(0,0,0,0.4)'
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      
      {/* <p className="text-gray-400 mt-2 text-sm">
        {isAutoRotating ? "Auto-rotating • Move mouse over globe to control" : "Manual control • Move away to resume auto-rotation"}
      </p> */}
    </div>
  );
}