import RoomCardMini from "../../components/cards/RoomCard/RoomCard"
import roomsData from './ROOMS_DATA.json'
const Rooms = () => {
  return (
    <div>
      {roomsData.map((item, index) => (
        <RoomCardMini
        key={index}
        type={item.type}
        size={item.size}
        square={item.square}
        price={item.price}
        equipment={item.equipment}
        />

      ))}
    </div>
  )
}

export default Rooms