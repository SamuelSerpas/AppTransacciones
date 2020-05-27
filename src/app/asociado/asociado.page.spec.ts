import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsociadoPage } from './asociado.page';

describe('AsociadoPage', () => {
  let component: AsociadoPage;
  let fixture: ComponentFixture<AsociadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
