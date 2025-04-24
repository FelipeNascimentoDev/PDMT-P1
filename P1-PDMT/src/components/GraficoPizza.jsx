import React, { Component } from 'react'
import { Chart } from 'primereact/chart'

class GraficoPizza extends Component {
  contarEstados(estados) {
    const contagem = {}
    for (let i = 0; i < estados.length; i++) {
      const estado = estados[i]
      contagem[estado] = (contagem[estado] || 0) + 1
    }
    return contagem
  }

  infosGrafico(estados) {
    const contagem = this.contarEstados(estados)
    const labels = Object.keys(contagem)
    const valores = Object.values(contagem)

    return {
      labels: labels,
      datasets: [
        {
          data: valores,
          backgroundColor: [
            '#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#EC407A',
            '#26C6DA', '#FF7043', '#9CCC65', '#26A69A', '#D4E157',
            '#7E57C2', '#EF5350', '#29B6F6', '#FFCA28', '#8D6E63',
            '#5C6BC0', '#FF8A65', '#66BB6A', '#BA68C8', '#81D4FA',
            '#A1887F', '#AED581', '#7986CB', '#FFB74D', '#4DB6AC',
            '#E57373'
          ],
          hoverBackgroundColor: [
            '#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#F48FB1',
            '#4DD0E1', '#FF8A65', '#AED581', '#4DB6AC', '#DCE775',
            '#9575CD', '#E57373', '#4FC3F7', '#FFD54F', '#A1887F',
            '#7986CB', '#FFAB91', '#81C784', '#CE93D8', '#B3E5FC',
            '#BCAAA4', '#C5E1A5', '#9FA8DA', '#FFE082', '#80CBC4',
            '#EF9A9A'
          ]
        }
      ]
    }
  }

  render() {
    const { estadosBuscados } = this.props
    const dadosGrafico = this.infosGrafico(estadosBuscados)

    const opcoesGrafico = {
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
    
    return (
      <div className="card mt-5">
        <Chart
          type="pie"
          data={dadosGrafico}
          options={opcoesGrafico}
          className="w-full"
          style={{ width: '500px', height: '500px' }}
        />
      </div>
    )
  }
}

export default GraficoPizza