import {
  fireEvent,
  render,
  screen,
  TestingLibraryElementError,
} from '@testing-library/react';
import ShoppingList from './ShoppingList';

describe('ShoppingList', () => {
  it('renders a shoppingList', () => {});
  const now = new Date().toString();
  const dogItems = [
    {
      id: 0,
      created_at: now,
      item_name: 'chew toy',
      quantity: 100,
      shopping_list_id: 0,
    },
    {
      id: 1,
      created_at: now,
      item_name: 'kibble',
      quantity: 41,
      shopping_list_id: 0,
    },
  ];
  const shoppingList = {
    id: 0,
    name: 'dog toy store',
    created_at: now,
    shoppingItems: dogItems,
  };
  render(<ShoppingList shoppingList={shoppingList} />);
  expect(screen.getByTestId('shopping-list-0')).not.toBe(null);
});
