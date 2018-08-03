import { MainMenuFormComponent } from './main-menu-form.component';


describe('MainMenuFormComponent', () => {

  let comp: MainMenuFormComponent;
  let ngForm: { reset: jasmine.Spy };
  let mockedForm;

  beforeEach(() => {
    comp = new MainMenuFormComponent();
    ngForm = jasmine.createSpyObj('ngForm', ['reset']);
    ngForm.reset.and.callFake(() => {
      comp.form = {};
    });
    mockedForm = { name: 'CategoryName' };
  });


  it('should contain empty form at the beginning', () => {
    expect(comp.form).toEqual({});
  });

  describe('#discardForm()', () => {

    beforeEach(() => {
      comp.form = mockedForm;
    });

    it('should empty the form', () => {
      comp.discardForm(ngForm);
      expect(comp.form).toEqual({});
    });

    it('should emit onComplete event with NULL value', () => {
      comp.onComplete.subscribe((payload) => {
        expect(payload).toBeNull();
      });
      comp.discardForm(ngForm);
    });

  });

  describe('#submitForm()', () => {

    beforeEach(() => {
      comp.form = mockedForm;
    });

    it('should emit onSubmit event with predictable content', () => {
      comp.onSubmit.subscribe((payload) => {
        expect(payload).toEqual(mockedForm);
      });
      comp.submitForm(ngForm);
    });

    it('should emit onComplete event with predictable content', () => {
      comp.onComplete.subscribe((payload) => {
        expect(payload).toEqual(mockedForm);
      });
      comp.submitForm(ngForm);
    });


  });


});
