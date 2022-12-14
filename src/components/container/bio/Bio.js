import React from 'react'
import './bio.css'
import imgBio from './color.jpg'
import iconoInsta from './instagram.png'
import iconoFaceb from './facebook.png'

const Bio = () => {
return (
    <>
    <div className='orgContainerBio'>
    <div className='bio'>
        <h3>Bio</h3>
        <div className='orgBio'>
        <p>
            Estudió Licenciatura en Pintura en la Facultad de Artes de la Universidad Nacional de Córdoba.
            Realizó
            las muestras individuales “Mini Muestra” en Galería Marchiaro (2020) “El límite infinito” en
            Museo
            de
            las Mujeres (2019) “Transiciones” en Visuales Famaf (2018), “Cromofilia” en Alianza Francesa
            (2015)
            y
            Galería Bastón del Moro (2014), “Doce artistas emergentes” en Casona Municipal (2011). Participó
            en
            las
            muestras colectivas “Abstracciones/9 Abordajes” en Galería Marchiaro, “Pulso” en Buen Pastor,
            “Re-Creo
            Experiencias artísticas” en Casa Naranja; "Éter" en Galería Nodo 940, entre otras.
            “Me interesa trabajar con la forma y el color de una manera científica y experimental, pensando
            instrucciones, órdenes o formulas simples que al ser ejecutadas sobre el bastidor generen
            resultados
            estéticos interesantes y a la vez sorpresivos”
        </p>
        <img src={imgBio} alt="imagen de la artista junto a su obra"></img>
        </div>
    </div>
    <div className='cv'>
        <h3>CV</h3>
        <p>individual:</p>
            <div>
                <p>-Lourdes Miazzo, Galería Marchiaro en Panorama galerías, ARTE BA, 2020</p>
                <p>-Ciclo Mini Muestras, Galería Marchiaro, 2020</p>
                <p>-El límite infinito, Museo de las Mujeres (MUMU), 2019</p>
                <p>-Transiciones, VisualesFaMAF UNC, 2018</p>
                <p>-Cromofilia, Alianza Francesa Córdoba, 2015</p>
                <p>-Cromofilia, Galería Bastón de Moro, 2014</p>
                <p>-12 artistas emergentes, Casona Municipal Córdoba, 2011</p>
            </div>
        <p>grupal:</p>
            <div>
                <p>Arte contemporáneo femenino, De Arte Trastienda, 2022-2023</p>
                <p>Popurrí 25 artistas,Galería Marchiaro, 2022</p>
                <p>Artistas de Córdoba 1960|2022, Galería Tierra Arte Contemporáneo, 2022</p>
                <p>-Orquesta, 220 centro cultural, 2021</p>
                <p>-Feria de Arte Cordoba, Galería Marchiaro, 2021</p>
                <p>-Abstracciones/ 9 Abordajes, Galería Marchiaro, 2019</p>
                <p>-Pulso 33 artistas, Muestra itinerante: Córdoba, Rio Cuarto, Las Varillas, Villa María, Buenos Aires, 2019
                </p>
                <p>-Éter, Galería NODO 940, 2018</p>
                <p>-Mini Contemporáneo, Museo de Arte de La Pampa, 2016</p>
                <p>-Otoño, NODO 940, 2016</p>
                <p>-Una muestra de las chicas de Mini, Galería ESAA, Unquillo, 2016</p>
                <p>-Proyecto Cofre, galería El pasaje, Tucumán, 2015</p>
                <p>-Pictas: FaMAF UNC, 2014</p>
            </div>
        <p>selección:</p>
            <div>
                <p>-Premio Banco de Córdoba, Museo Arquitecto Francisco Tamburini, 2017</p>
                <p>-MUAJ, Muestra arte joven, Sociedad Española de Cosquín, 2017</p>
                <p>-XXXV edición Salón y Premio Ciudad de Córdoba, Cabildo de Córdoba, 2016</p>
            </div>
    </div>
    <div className='redes'>
        <h3>Redes Sociales</h3>
        <a href="https://www.instagram.com/lourdesmiazzo/" target="blank"><img src={iconoInsta} alt="icono de instagram version gráfica" className='icono'></img></a>
        <a href="https://www.facebook.com/analourdes.miazzo/" target="blank"><img  src={iconoFaceb} alt="icono de facebook version gráfica" className='icono'></img></a>
    </div>
    </div>
    </>
)
}

export default Bio