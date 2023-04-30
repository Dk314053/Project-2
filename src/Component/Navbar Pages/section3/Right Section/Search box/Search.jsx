
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Search.module.css";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
export default function Search() {
  return (
    <>
      <div className={Styles.icon}>
       <div className={Styles.font}>
      <FontAwesomeIcon  icon={faMagnifyingGlass} /></div>
        <input
       
          className={Styles.searchInput}
          type="text"
          placeholder=" Search Twitter"
        />
      </div>
    </>
  );
}
