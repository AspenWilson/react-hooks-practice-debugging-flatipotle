import React from "react";

function Side({sidesChoice}) {
  return <div>
    {sidesChoice.join(', ')}
    </div>;
}

export default Side;
