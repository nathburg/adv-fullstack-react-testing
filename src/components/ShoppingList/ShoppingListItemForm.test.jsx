import {
  fireEvent,
  render,
  screen,
  TestingLibraryElementError,
} from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm';

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
    render(<ShoppingListItemForm id={'test-id'} />);
    expect(
      screen.getByTestId('shopping-list-item-form-test-id')
    ).not.toBe(null);
  });
});
