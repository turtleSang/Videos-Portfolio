import { listItem, TypeContent } from "@/helper/constance";
import ListItem from "@/layout/list-items";

export default function Page() {
  let listDirector = listItem.filter(
    (val) => val.type === TypeContent.director
  );
  return <ListItem listItem={listDirector} />;
}
