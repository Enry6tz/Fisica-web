"use client"
import { Card } from '@/components/Card';
import React from 'react'


export default function InformePage() {
  const integrantes =[
    {
      "name": "Sebastián Barraza",
      "career": "Ingeniería en Computación",
      "path": "/img/seba.png",
      "description": "",
      "link": "sebabarrazapriv@gmail.com"
    },
    {
      "name": "Gonzalo Elián Dupin Álvarez",
      "career": "Ingeniería en Computación",
      "path": "/img/gonza.png",
      "description": "",
      "link": "@gmail.com" //TODO: completar
    },
    {
      "name": "Bruno Nicolas Gonzalez",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/bruno.jpg",
      "description": "",
      "link": "Brunox140401@gmail.com"
    },
    {
      "name": "Facundo Intile Bartel",
      "career": "Ingeniería en Computación",
      "path": "/img/facu.png",
      "description": "",
      "link": "intilebartel@gmail.com"
    },
   
    {
      "name": "Agustin Ramirez Ramos",
      "career": "Licenciatura en Computación",
      "path": "/img/agusrr.jpg",
      "description": "",
      "link": "agustinramirez9560@gmail.com"
    },
    {
      "name": "Camila Jesús Rojas Fritz",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/cami.jpeg",
      "description": "",
      "link": "rojasfritzcamilaj@gmail.com"
    },
    {
      "name": "Ezequiel Alejandro Suarez Mancisidor",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/eze.jpg",
      "description": "",
      "link": "ezequielsuarez2002@outlook.com"
    },
    {
      "name": "Enrique Seitz",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/enri.png",
      "description": "",
      "link": "enrique6tz@gmail.com"
    },
    {
      "name": "Pierino Oscar Spina",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/piero.png",
      "description": "",
      "link": "pierinooscar@gmail.com"
    },
    {
      "name": "Agustín Yerba Fernández",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/agus.jpg",
      "description": "",
      "link": "agustin150604@gmail.com"
    }
  ]
  
  const docentes =[
    {
      "name": "Sebastián Barraza",
      "career": "Ingeniería en Computación",
      "path": "/img/seba.png",
      "description": "",
      "link": "sebabarrazapriv@gmail.com"
    },
    {
      "name": "Gonzalo Elián Dupin Álvarez",
      "career": "Ingeniería en Computación",
      "path": "/img/gonza.png",
      "description": "",
      "link": "@gmail.com" //TODO: completar
    },
    {
      "name": "Bruno Nicolas Gonzalez",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/bruno.jpg",
      "description": "",
      "link": "Brunox140401@gmail.com"
    },
    {
      "name": "Gonzalo Elián Dupin Álvarez",
      "career": "Ingeniería en Computación",
      "path": "/img/gonza.png",
      "description": "",
      "link": "@gmail.com" //TODO: completar
    },
    {
      "name": "Bruno Nicolas Gonzalez",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/bruno.jpg",
      "description": "",
      "link": "Brunox140401@gmail.com"
    },
  ]
  return (
      <div className="pb-10 mx-16">
        <div className="text-center text-BluePrimary pt-5">

          </div>
          <div className="m-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
              { /*
              docentes.map((docen, index) => (
                      <Card
                          key={index}
                          name={docen.name}
                          career={docen.career}
                          path={docen.path}
                          description={docen.description}
                          link={docen.link}
                      />
                  ))*/
                } 
              </div>
          </div>
          <div className="text-center text-BluePrimary pt-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">Integrantes del Proyecto</h1>
              <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light p-4"></span>
          </div>
          <div className="m-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                  {integrantes.map((integrante, index) => (
                      <Card
                          key={index}
                          name={integrante.name}
                          career={integrante.career}
                          path={integrante.path}
                          description={integrante.description}
                          link={integrante.link}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
}
