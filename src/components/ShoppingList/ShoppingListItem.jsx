export default function ShoppingListItem({ shoppingItem }) {
  return (
    <div
      data-testid={`shopping-list-item-${shoppingItem.shopping_list_id}-${shoppingItem.id}`}
    >
      {shoppingItem.item_name}
      {shoppingItem.quantity}
    </div>
  );
}
