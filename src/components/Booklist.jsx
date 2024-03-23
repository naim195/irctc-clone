import { v4 as uuidv4 } from "uuid";

export default function Booklist({ bookedTrains }) {
  console.log(bookedTrains);
  return (
    <div>
      <div>Your booked tickets are :</div>

      {bookedTrains.map((train) => (
        <div key={uuidv4()}>
          <p>{train.train_name}</p>
        </div>
      ))}
    </div>
  );
}
