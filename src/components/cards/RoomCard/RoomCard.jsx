import classNames from "classnames";
import { equipmentMap } from "./Equipment";

const typeMap = {
  economy: "Эконом",
  economyPlus: "Эконом-плюс",
  comfort: "Комфорт",
  suite: "Сьют",
  lux: "Люкс",
  superLux: "Супер-Люкс"
}

const RoomCard = (props) => {
  const {
    mode,
    type,
    size,
    square,
    equipment,
    price,
    mainPhoto,
    otherPhotos,
  } = props

  return (
    <div className={classNames(
      'room-card',
      `room-card-${mode}`,
    )}>

    </div>
  )
}

const RoomCardMini = (props) => {
  const {
    type,
    size,
    square,
    equipment,
    price,
    mainPhoto,
  } = props
  const mainClass = "room-card-mini"

  return (
    <div className={mainClass}>
      <div className={`${mainClass}__image-container`}>
        <img
          src={mainPhoto}
          alt=""
        />
      </div>
      <div className={`${mainClass}__info`}>
        <h3 className={`${mainClass}__info-type`}>
          {typeMap[type]}
        </h3>
        <p className={`${mainClass}__info-size`}>
          Размеры (ШхГхВ) - {size}
        </p>
        <p className={`${mainClass}__info-square`}>
          Площадь - {square} м2
        </p>
        <div className={`${mainClass}__equipment`}>
          <p>
            Оснащение номера
          </p>
          {equipment && equipment.length > 0 ? (
            equipment.map((item, index) => {
              const eq = equipmentMap[item] || equipmentMap.null
              return (
                <div key={index}>
                  {eq.icon}
                </div>
              )
            })
          ) : (
            <div>
              {equipmentMap.null.icon}
            </div>
          )}
        </div>
        <p className={`${mainClass}__info-size`}>
          Цена за сутки: {price}₽
        </p>
      </div>
    </div>
  )
}

export default RoomCardMini