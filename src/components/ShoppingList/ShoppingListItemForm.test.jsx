import {
  fireEvent,
  render,
  screen,
  TestingLibraryElementError,
} from '@testing-library/react';
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
  });
});
