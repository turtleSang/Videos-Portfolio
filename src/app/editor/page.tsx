import { listItem, TypeContent } from "@/helper/constance";
import ListItem from "@/layout/list-items";

export default function Page() {
  let listEditor = listItem.filter((val) => val.type === TypeContent.editor);
  return <ListItem listItem={listEditor} />;
}
