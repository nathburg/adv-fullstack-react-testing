import { render, screen } from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem';

describe('ShoppingListItem', () => {
  it('shopping list item renders at all', () => {
    const now = new Date().toString();
    const dogItem = {
      id: 0,
      created_at: now,
      item_name: 'chew toy',
      quantity: 100,
      shopping_list_id: 0,
    };
    render(<ShoppingListItem shoppingItem={dogItem} />);
    expect(screen.getByTestId('shopping-list-item-0-0')).not.toBe(
      null
    );
  });
});
