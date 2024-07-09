import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { MenuType } from "../../types";
import MenuItem from "./MenuItem";

function Menu() {
  // this is casting data to appropriate type. without that, it will show unknow type.
  const menu = useLoaderData() as MenuType[];

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
