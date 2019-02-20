import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });

  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('save provider', () => {

    it("should remove saved provider from unselected list", () => {
      let provider = component.unselectedProviders[0];
      component.saveProvider(provider);
      expect(component.unselectedProviders).not.toContain(provider);
    });

    it("should place saved provider in selected list", () => {
      let provider = component.unselectedProviders[0];
      component.saveProvider(provider);
      expect(component.selectedProviders).toContain(provider);;
    });
  });

  describe('unsave provider', () => {

    it("should remove unsaved provider from selected list", () => {
      let provider = component.selectedProviders[0];
      component.unsaveProvider(provider);
      expect(component.unselectedProviders).toContain(provider);
    });

    it("should place unsaved provider back in unselected list", () => {
      let provider = component.selectedProviders[0];
      component.unsaveProvider(provider);
      expect(component.selectedProviders).not.toContain(provider);
    });
  });
});
