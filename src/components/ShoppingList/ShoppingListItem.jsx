export default function ShoppingListItem({ shoppingItem }) {
  return (
    <div data-testId={`shopping-list-item-${shoppingItem.id}`}>
      {shoppingItem.item_name}
      {shoppingItem.quantity}
    </div>
  );
}
