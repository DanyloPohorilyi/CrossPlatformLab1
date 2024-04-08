import { Suit } from './class/suit';

describe('Suit', () => {
  it('Створення костюму', () => {
    const suit = new Suit('Test Suit', 180);
    expect(suit).toBeTruthy();
    expect(suit.name).toEqual('Test Suit');
    expect(suit.H).toEqual(180);
  });

  it('Перевірка валідації', () => {
    expect(() => {
      new Suit('Invalid Suit', 70);
    }).toThrow(new Error('Short stature'));
  });

  it('Обчислення фабричної вартості', () => {
    const suit = new Suit('Test Suit', 180);
    expect(suit.FabricCosts()).toEqual(360.3);
  });

  it('Виведення інформації', () => {
    const suit = new Suit('Test Suit', 180);
    expect(suit.display()).toEqual('Test Suit H:180');
  });
});
