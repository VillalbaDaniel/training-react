import "./Expenses.css";
import ItemCost from "./items/ItemCost";
import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import {itemList} from "../itemsDB/items";
import ItemContainer from "./wrappers/ItemContainer"
import Wrapper from "./wrappers/Wrapper";

function Expenses() {
  return (
    <Wrapper content={
      itemList.map((item, index) => {
        return (
          <ItemContainer key={index}>
            <ItemIcon
              icons={item.icons}
              classes={item.classes}
            />
            <ItemInfo data={item.data} />
            <ItemCost money={item.money} />
          </ItemContainer>
        );
      })}
    >
      
    </Wrapper>
  );
}

export default Expenses;