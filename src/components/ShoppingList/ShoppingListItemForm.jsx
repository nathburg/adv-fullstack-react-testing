export default function ShoppingListItemForm({ id }) {
  return (
    <>
      <form data-testid={`shopping-list-item-form-${id}`}>
        <input type="text"></input>
        <button type="submit">Submit Item</button>
      </form>
    </>
  );
}
