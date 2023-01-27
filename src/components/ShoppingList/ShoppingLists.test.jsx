import {
  fireEvent,
  render,
  screen,
  TestingLibraryElementError,
} from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists', () => {
  it('shopping list renders at all', () => {
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
    const hardwareItems = [
      {
        id: 0,
        created_at: now,
        item_name: 'hammer',
        quantity: 1,
        shopping_list_id: 1,
      },
    ];
    const childItems = [
      {
        id: 0,
        created_at: now,
        item_name: 'carrot puree',
        quantity: 7,
        shopping_list_id: 2,
      },
    ];

    const shoppingLists = [
      {
        id: 0,
        name: 'dog toy store',
        created_at: now,
        shoppingItems: dogItems,
      },
      {
        id: 1,
        name: 'hardware store',
        created_at: now,
        shoppingItems: hardwareItems,
      },
      {
        id: 2,
        name: 'child toy store',
        created_at: now,
        shoppingItems: childItems,
      },
    ];
    render(<ShoppingLists shoppingLists={shoppingLists} />);
    expect(screen.getByTestId('shopping-lists')).not.toBe(null);
  });
});
