import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { hideAutoList, searchProducts } from "../../store/actions";
import "./styles.scss";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { autoList, displayAutoList } = useSelector(
    (state: RootStateOrAny) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProducts(searchTerm));
  }, [searchTerm]);

  const hideSearchList = (title: string) => {
    setSearchTerm(title);
    setTimeout(() => {
      dispatch(hideAutoList());
    }, 50);
  };

  return (
    <header>
      <div id="search-box">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search products"
          id="search-box"
          aria-label="Search products"
        />
        {searchTerm && displayAutoList && (
          <ul id="auto-complete-list">
            {autoList
              .filter((title: string) =>
                title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((title: string) => (
                <li key={title} onClick={() => hideSearchList(title)}>
                  {title}
                </li>
              ))}
          </ul>
        )}
      </div>
    </header>
  );
};
export default Header;
