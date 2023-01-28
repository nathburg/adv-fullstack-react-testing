export default function ShoppingListItem({
  shoppingItem: { shopping_list_id, id, item_name, quantity },
}) {
  return (
    <div data-testid={`shopping-list-item-${shopping_list_id}-${id}`}>
      {item_name}
      {quantity}
    </div>
  );
}
