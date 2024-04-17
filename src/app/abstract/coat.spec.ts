import { Coat } from "./class/coat";

describe('Coat', () => {
  it('Створення сутності пальто', () => {
    const coat = new Coat('Test Coat', 10);
    expect(coat).toBeTruthy();
    expect(coat.name).toEqual('Test Coat');
    expect(coat.V).toEqual(10);
  });

  it('Валідація при створенні пальто', () => {
    expect(() => {
      new Coat('Invalid Coat', 3);
    }).toThrow(new Error('V < 5'));
  });

  it('Обрахування вартості пальто', () => {
    const coat = new Coat('Test Coat', 10);
    expect(coat.FabricCosts()).toEqual(2.0384615384615383); // Приблизно 2.08
  });

  it('Відображення правильної інформації', () => {
    const coat = new Coat('Test Coat', 10);
    expect(coat.display()).toEqual('Test Coat V:10');
  });
});
