import RoomCardMini from "../../components/cards/RoomCard/RoomCard"
import roomsData from './ROOMS_DATA.json'
const Rooms = () => {
  return (
    <section className="rooms">
      {roomsData.map((item, index) => (
        <RoomCardMini
        key={index}
        type={item.type}
        size={item.size}
        square={item.square}
        price={item.price}
        equipment={item.equipment}
        mainPhoto={item.mainPhoto}
        />
      ))}
    </section>
  )
}

export default Rooms