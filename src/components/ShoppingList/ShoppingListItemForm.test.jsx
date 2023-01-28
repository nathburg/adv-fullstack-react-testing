import { render, screen } from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm';

describe('ShoppingListItem', () => {
  it('shopping list item renders at all', () => {
    render(<ShoppingListItemForm id={'test-id'} />);
    expect(
      screen.getByTestId('shopping-list-item-form-test-id')
    ).not.toBe(null);
  });
});
