import React from 'react'
import "./Map.css"
const Map = () => {
  return (
    <div className="mapContainer">
      <iframe
      title="Title1"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.058287553612!2d77.572151!3d13.00194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d588d9caef%3A0x5ba382acaf05e1bd!2sGoodway%20Attestation%20%26%20Apostille%20Services%20in%20Bangalore%20Pvt.%20Ltd!5e0!3m2!1sen!2sus!4v1719668500894!5m2!1sen!2sus"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
         className="map"
      ></iframe>
    </div>
  )
}

export default Map
