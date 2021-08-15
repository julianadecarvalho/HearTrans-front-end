import React from "react";
import { AvgRating } from "./AvgRating";

export function ReviewsList() {
  return (
    // <div>
    //   <ul>
    //     <li>review component? or can we just map out the reviews here</li>
    //   </ul>
    // </div>
    <div className="card">
      <div className="card-content">
        <div className="content">
          <AvgRating rating={"4"} len={2} />
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
          <br></br>
          <time>11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
