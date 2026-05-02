import React, { useEffect, useRef } from "react";
import "../../styles/Graphics.css";
import { Chart } from "chart.js/auto";

function Graphics({ salas, horas }) {
  const ChartRef = useRef(null);
  const charInstance = useRef(null);
  const NombreSalas = salas.map((objetoSala) => objetoSala.sala);

  useEffect(() => {
    if (ChartRef.current) {
      if (charInstance.current) {
        charInstance.current.destroy();
      }

      const ctx = ChartRef.current.getContext("2d");

      charInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: NombreSalas,
          datasets: [
            {
              label: "Horas de Uso",
              data: horas,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        if (charInstance.current) {
          charInstance.current.destroy();
        }
      };
    }
  }, [NombreSalas, horas]);
  return (
    <div className="graphics-container">
      <canvas ref={ChartRef} className="barGraphic"></canvas>
    </div>
  );
}
export default Graphics;
