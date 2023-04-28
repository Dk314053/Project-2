import { useState } from "react";

export default function FollowButton() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          if (show === false) {
            setShow(true);
          } else {
            setShow(false);
          }
        }}
      >
        {show ? "Follow" : "Following"}
      </button>
    </>
  );
}
