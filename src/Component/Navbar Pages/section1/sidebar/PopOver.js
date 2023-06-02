import React from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import style from "./PopOver.module.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../Login Pgaes/localstorage";


const PopOver = () => {
  const getName = getUsers();
 
  const navigate = useNavigate();

  function Loggedout() {
navigate("/signin")
  }

  return (
    <div className={style.maincontainer}>
    <PopupState variant="popover" popupId="demo-popup-popover">

      {(popupState) => (
        <div>
          <button
            className={style.btn}
            {...bindTrigger(popupState)}
            style={{ cursor: "pointer", padding: "0 10px" }}
          >
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              alt=""
              className={style.photo}
            />
               <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ display: "flex", gap: "1rem" }}>
              {getName.firstname} 
            </span>
            <span>@{getName[getName.length-1].username}</span>
            
          </div>
            <MoreHorizOutlinedIcon />
          </button>
       
         
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2, cursor: "pointer" }}>
              Add an existing account
            </Typography>
            <Typography sx={{ p: 2, cursor: "pointer" }} onClick={Loggedout}>
              Log out{" "}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
    </div>
  );
};

export default PopOver;