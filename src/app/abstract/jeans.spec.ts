import { Jeans } from './class/jeans';

describe('Jeans', () => {
  it('Створення джинсів', () => {
    const jeans = new Jeans('Test Jeans', 32);
    expect(jeans).toBeTruthy();
    expect(jeans.name).toEqual('Test Jeans');
    expect(jeans.Waist).toEqual(32);
  });

  it('Помилка при створенні', () => {
    expect(() => {
      new Jeans('Invalid Jeans', -5);
    }).toThrow(new Error('Waist < 0'));
  });

  it('Обрахування фабричної вартості', () => {
    const jeans = new Jeans('Test Jeans', 32);
    expect(jeans.FabricCosts()).toEqual(5.333333333333333); // Приблизно 5.33
  });

  it('Виведення інформації', () => {
    const jeans = new Jeans('Test Jeans', 32);
    expect(jeans.display()).toEqual('Test Jeans Waist:32');
  });
});
