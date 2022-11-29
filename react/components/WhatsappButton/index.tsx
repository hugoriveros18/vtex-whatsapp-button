import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  logo: string
  phone: string
  message: string
}

const WhatsappButton = ({ logo, phone, message }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20');
  const CSS_HANDLES = [
    "whatsapp__container",
    "whatsapp__logo"
  ]
  const handles = useCssHandles(CSS_HANDLES);
  return (
    <>
      <div className={handles['whatsapp__container']}>
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
        >
          <img
            className={handles['whatsapp__logo']} 
            src={logo}
            alt="Logo de Whatsapp"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = { //se define de que tipo seran las props que recibira el componente, asimismo se define cuales son obligatorias u opcionales
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string
}

WhatsappButton.defaultProps = { //valores que se le dara por defecto al componente en caso de que en el store-theme se declare el bloque pero no se le pase ningunas props
  logo: 'logo-ejemplo',
  phone: '3163042458',
  message: 'Estas comunicandote con VTEX, por favor deja tu mensaje'
}

WhatsappButton.schema = { //forma de declarar un esquema de un componente, esto es utilizado para que en el site editor podamos realizar cambios sin necesidad de utilizar codigo
  title: 'Boton de WhatsApp', //nombre del componente
  type: 'object', //tipo del componente, por lo general sera un object siempre
  properties: { //propiedades que tiene el componente, que basicamente son los props que en el store-theme se podran pasar al componente para modificar sus caracteristicas o funcionalidades
    logo: { //aqui se empiezan a declarar cada una de las props con sus caracteristicas
      title: 'logo de WhatsApp que se relaciones con la marca', //titulo de la propiedad
      type: 'string', //el tipo que es la propiedad
      widget: { //interfaces de usuario que permiten mostrar al usuario diferentes funcionalidades
        'ui:widget': 'image-uploader', //siempre se invoca el widget con 'ui:widget' seguido del nombre especifico del widget. El 'image-uploader' va permitir hacer una subida de imagenes
      },
    },
    phone: {
      title: 'Telefono',
      description: 'agrega el numero de telefono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'agrega el mensaje',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    }
  },
}

export default WhatsappButton
